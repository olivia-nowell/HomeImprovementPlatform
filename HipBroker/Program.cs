namespace HipBroker
{
    internal class Program
    {
        static void Main(string[] args)
        { 
            // Create and start broker
            var server = new HipServer("0.0.0.0", 7077);
            Task.Run(() => server.StartAsync());

            Console.ReadLine();
        }
    }
}
