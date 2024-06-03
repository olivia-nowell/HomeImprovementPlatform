using Newtonsoft.Json;

namespace SmartDevices
{
    public static class Program
    {
        //private static IoTDevice? _iotDevice;
        private static IoTDevice? _deviceManager;
        private static bool _isConnected;

        public static void Main(string[] args)
        {
            _isConnected = true;

            // create and start DeviceApi Client
            _deviceManager = new IoTDevice("broker", 7077);
            Task.Run(() => _deviceManager.Connect(["deviceData"]));
            Task.Delay(3000);
            Task.Run(() => SendDeviceData());

            // create and start IoT Device Client
            //_iotDevice = new IoTDevice("localhost", 7077);
            //Task.Run(() => _iotDevice.Connect(["deviceConfiguration"]));
            Task.Delay(1000);
            //Task.Run(() => SendDeviceConfiguration());

            Console.ReadLine();
            _isConnected = false;
            Task.Run(() => _deviceManager.Disconnect());
            //Task.Run(() => _iotDevice.Disconnect());

            //Task.Run(() => server.Stop());
        }

        private static async Task SendDeviceData()
        {
            var random = new Random();
            for (int i = 0; i < 1; i++)//10 device updates 
            {
                var deviceData = new DeviceData
                {
                    Id = 0,
                    Current = random.Next(0, 5000),
                    Voltage = random.Next(0, 480),
                    RunTime = random.Next(0, 10000),
                    Error = random.NextDouble() > 0.5
                };


                var jsonObject = JsonConvert.SerializeObject(deviceData);
                await _deviceManager.Publish("deviceData", jsonObject);

                await Task.Delay(1000);
            }
        }

        //private static async Task SendDeviceConfiguration()
        //{

        //}

    }
}
