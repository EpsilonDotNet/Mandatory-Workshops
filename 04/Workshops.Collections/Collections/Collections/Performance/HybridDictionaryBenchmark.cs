using System;
using System.Collections.Generic;
using System.IO;
using System.Collections.Specialized;
using System.Text;
using System.Collections;
using System.Diagnostics;

namespace Collections.Performance
{
    public class HybridDictionaryBenchmark
    {
        static string[] GetStringArray(int size)
        {
            // Get array of random strings
            string[] array = new string[size];
            for (int i = 0; i < size; i++)
            {
                array[i] = Path.GetRandomFileName();
            }
            return array;
        }

        static HybridDictionary GetHybridDictionary(string[] array)
        {
            // Get HybridDictionary filled with all the strings
            HybridDictionary hybrid = new HybridDictionary();
            foreach (string value in array)
            {
                hybrid.Add(value, true);
            }
            return hybrid;
        }

        static Hashtable GetHashtable(string[] array)
        {
            // Get Hashtable filled with all the strings
            Hashtable table = new Hashtable();
            foreach (string value in array)
            {
                table.Add(value, true);
            }
            return table;
        }

        static Dictionary<string, bool> GetDictionary(string[] array)
        {
            // Get Dictionary filled with all strings
            Dictionary<string, bool> dictionary = new Dictionary<string, bool>();
            foreach (string value in array)
            {
                dictionary.Add(value, true);
            }
            return dictionary;
        }

        public static void Execute()
        {
            // Loop over element count
            for (int length = 0; length <= 20; length++)
            {
                // Get the array
                var array = GetStringArray(length);

                // Get the collections
                var hybrid = GetHybridDictionary(array);
                var hash = GetHashtable(array);
                var dict = GetDictionary(array);

                // Adjust the maximum iterations
                int m = 1000000;
                if (length <= 1)
                {
                    m *= 100;
                }
                else if (length <= 5)
                {
                    m *= 10;
                }

                // Test HybridDictionary [Blue]
                Stopwatch s1 = Stopwatch.StartNew();
                for (int i = 0; i < m; i++)
                {
                    foreach (string value in array)
                    {
                        bool flag = (bool)hybrid[value];
                    }
                }
                s1.Stop();

                // Test Hashtable [Red]
                Stopwatch s2 = Stopwatch.StartNew();
                for (int i = 0; i < m; i++)
                {
                    foreach (string value in array)
                    {
                        bool flag = (bool)hash[value];
                    }
                }
                s2.Stop();

                // Test Dictionary [Green]
                Stopwatch s3 = Stopwatch.StartNew();
                for (int i = 0; i < m; i++)
                {
                    foreach (string value in array)
                    {
                        bool flag = dict[value];
                    }
                }
                s3.Stop();

                // Output benchmarks to Console.                
                Console.Write($"HybridDictionary: {s1.ElapsedMilliseconds}");
                Console.Write(", ");
                Console.Write($"Hashtable: {s2.ElapsedMilliseconds}");
                Console.Write(", ");
                Console.Write($"Dictionary: {s3.ElapsedMilliseconds}");
                Console.Write(" [");
                Console.Write($"Iteration: {m}");
                Console.Write(", ");
                Console.Write($"Element Count: {length}");
                Console.WriteLine("]");
            }
            Console.Read();
        }
    }
}
