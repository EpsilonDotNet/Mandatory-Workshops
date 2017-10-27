using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Collections.Concurrency
{
    public class ConcurentDictionarySample
    {
        private static int _nextNumber = 0;

        // the holder of the char to ordinal
        private static ConcurrentDictionary<char, int> _dictionary = new ConcurrentDictionary<char, int>();

        // get the next id value
        private static int NextId
        {
            get {
                //Atomic operations across threads
                return Interlocked.Increment(ref _nextNumber);
            }
        }

        private static void Inserter()
        {
            for (int i = 0; i < 26; i++)
            {
                _dictionary.GetOrAdd((char)('A' + i), key => NextId);
            }
        }

        public static void Execute()
        {
            // 4 tasks attempting to get/insert
            var tasks = new List<Task>{
                new Task(Inserter),
                new Task(Inserter),
                new Task(Inserter),
                new Task(Inserter)
            };

            tasks.ForEach(t => t.Start());
            Task.WaitAll(tasks.ToArray());

            foreach (var pair in _dictionary.OrderBy(p => p.Key))
            {
                Console.WriteLine(pair.Key + ":" + pair.Value);
            }

            Console.Read();
        }
    }
}
