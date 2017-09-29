using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Collections.Concurrency
{
    public class ConcurrentQueueSample
    {
        private static long _total;
        private static ConcurrentQueue<int> _queued;

        private static void ProcessQueue()
        {
            int value;

            while (_queued.TryDequeue(out value))
            {
                Interlocked.Add(ref _total, value);
            }
        }
        public static void Execute()
        {
            IEnumerable<int> numbers = Enumerable.Range(1, 1000000);
            _queued = new ConcurrentQueue<int>(numbers);
            _total = 0;

            Task task1 = Task.Run(() => ProcessQueue());
            Task task2 = Task.Run(() => ProcessQueue());

            Task.WaitAll(task1, task2);

            Console.WriteLine("Total: {0}", _total);
            Console.Read();
        }
    }
}
