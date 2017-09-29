using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Collections.Concurrency
{
    public class BlockingCollectionSample
    {
        private static BlockingCollection<int> data = new BlockingCollection<int>();

        private static void Producer()
        {
            for (int ctr = 0; ctr < 10; ctr++)
            {
                data.TryAdd(ctr);
                Thread.Sleep(100);
            }
        }

        private static void Consumer()
        {
            foreach (var item in data.GetConsumingEnumerable())
            {
                Console.WriteLine($"Item {item} consumed");
            }
        }

        public static void Execute()
        {
            Console.WriteLine("Producer Consumer started");
            var producer = Task.Factory.StartNew(() => Producer());

            var consumer = Task.Factory.StartNew(() => Consumer());

            Console.Read();
        }
    }
}
