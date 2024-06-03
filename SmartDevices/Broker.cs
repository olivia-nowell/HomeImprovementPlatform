using MQTTnet.Server;
using MQTTnet;

namespace SmartDevices
{
    internal class Broker //will run standalone 
    {
        private readonly string _host;
        private readonly int _port;
        private MqttServer? _server;

        public Broker(string host, int port)
        {
            _host = host;
            _port = port;
        }

        public async Task StartAsync()
        {
            Console.WriteLine("Starting Olivia's Broker");
            var mqttFactory = new MqttFactory();

            var mqttServerOptions = new MqttServerOptionsBuilder()
                .WithDefaultEndpoint()
                .WithDefaultEndpointPort(_port)
                .Build();

            _server = mqttFactory.CreateMqttServer(mqttServerOptions);
            _server.ClientConnectedAsync += OnClientConnected;
            //validate connection
            _server.ValidatingConnectionAsync += ValidateConnection;

            await _server.StartAsync();
            Console.WriteLine("Olivia's Broker started successfully!!!");
        }

        private Task OnClientConnected(ClientConnectedEventArgs args)
        {
            Console.WriteLine($"Client Connected: {args.ClientId} {args.Endpoint}");
            return Task.CompletedTask;
        }

        private Task ValidateConnection(ValidatingConnectionEventArgs eventArgs)
        {
            Console.WriteLine($"Client '{eventArgs.ClientId}' wants to connect. Accepting!");
            return Task.CompletedTask;
        }

        public async Task Stop()
        {
            await _server.StopAsync();
        }

    }
}
