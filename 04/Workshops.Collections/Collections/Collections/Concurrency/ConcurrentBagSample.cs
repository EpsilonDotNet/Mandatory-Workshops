using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Collections.Concurrency
{
    public class ConcurrentBagSample
    {
        private static ConcurrentBag<int> data = new ConcurrentBag<int>();

        private static AutoResetEvent autoResetEvent = new AutoResetEvent(false);

        //Work stealing algorithm sample
        public static void Execute()
        {
            Task task1 = Task.Factory.StartNew(() =>
            {
                for (int i = 1; i <= 4; ++i)
                {
                    data.Add(i);
                }
                //wait for second thread to add its items
                autoResetEvent.WaitOne();

                while (data.IsEmpty == false)
                {
                    int item;
                    if (data.TryTake(out item))
                    {
                        Console.WriteLine($"Item {item} was taken of the Dictionary");
                    }
                }
            });


            Task task2 = Task.Factory.StartNew(() =>
            {
                for (int i = 5; i <= 7; ++i)
                {
                    data.Add(i);
                }
                autoResetEvent.Set();
            });

            task1.Wait();

            Console.Read();
        }
    }
}
