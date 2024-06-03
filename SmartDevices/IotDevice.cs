using MQTTnet.Client;
using MQTTnet;
using System.Text;

namespace SmartDevices
{
    internal class IoTDevice(string host, int port)
    {
        private readonly string _host = host;
        private readonly int _port = port;
        private MqttFactory _factory = new MqttFactory();
        private IMqttClient? _client;
        public const string DeviceClientTopic = "deviceclientinfo";

        public async Task Connect(IList<string> topics)
        {
            Console.WriteLine("Starting IoT Device");
            _client = _factory.CreateMqttClient();

            _client.ApplicationMessageReceivedAsync += OnApplicationMessageReceived;//When I get a message I am interested in


            var mqttClientOptions = new MqttClientOptionsBuilder().WithTcpServer(_host, _port).Build();

            await _client.ConnectAsync(mqttClientOptions, CancellationToken.None);

            foreach (var topic in topics)
            {
                var mqttSubscribeOptions = _factory.CreateSubscribeOptionsBuilder()
             .WithTopicFilter(
                 f =>
                 {
                     f.WithTopic(topic);
                 })
             .Build();
                await _client.SubscribeAsync(mqttSubscribeOptions, CancellationToken.None);
            }

            Console.WriteLine("Iot Device is connected.");
        }

        private Task OnApplicationMessageReceived(MqttApplicationMessageReceivedEventArgs args)
        {
            var message = Encoding.Default.GetString(args.ApplicationMessage.PayloadSegment);
            // var deviceData= JsonConvert.DeserializeObject<DeviceData>(message);

            Console.WriteLine($"Message Received: {args.ApplicationMessage.Topic} : {message}");
            return Task.CompletedTask;
        }

        public async Task Disconnect()
        {
            await _client.DisconnectAsync();

        }

        public async Task Publish(string topic, byte[] payload)
        {
            var applicationMessage = new MqttApplicationMessageBuilder()
               .WithTopic(topic)
               .WithPayload(payload)
               .Build();

            if (_client != null)
            {
                await _client.PublishAsync(applicationMessage, CancellationToken.None);
            }
        }

        public async Task Publish(string topic, string message)
        {
            var payload = Encoding.Default.GetBytes(message);
            await Publish(topic, payload);
        }

    }
}
