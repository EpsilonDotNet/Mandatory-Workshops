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
        
        public static void Execute()
        {
            for (int i = 1; i <= 100; ++i)
            {
                data.Add(i);
            }

            var task = Task.Factory.StartNew(() =>
            {

                int item;
                while (!data.IsEmpty)
                {
                    if (data.TryTake(out item))
                    {
                        Console.WriteLine($"{item} taken");
                    }                    
                }
            });
            
            Task.WaitAll(task);

            Console.Read();
        }
    }
}
