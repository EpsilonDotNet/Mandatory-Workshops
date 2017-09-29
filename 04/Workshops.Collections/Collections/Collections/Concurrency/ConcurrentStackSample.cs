using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Collections.Concurrency
{
    public class ConcurrentStackSample
    {
        private static ConcurrentStack<int> concurrentStack = new ConcurrentStack<int>();
        private static int counter = 0;

        public static void Execute()
        {
            //Add items to ConcurrentStack
            for (int i = 0; i < 5000; i++)
            {
                concurrentStack.Push(i);
            }

            //initialize 10 tasks
            Task[] stackTasks = new Task[10];
            for (int i = 0; i < stackTasks.Length; i++)
            {
                stackTasks[i] = Task.Factory.StartNew(() =>
                {
                    while (concurrentStack.Count > 0)
                    {
                        int currentElement;
                        bool success = concurrentStack.TryPop(out currentElement);
                        if (success)
                        {
                            Interlocked.Increment(ref counter);
                        }
                    }
                });
            }

            Task.WaitAll(stackTasks);
            Console.WriteLine("Counter: {0}", counter);
            Console.Read();
        }
    }
}
