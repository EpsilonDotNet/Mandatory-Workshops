using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Workshops.Delegates
{
    //Delegate usage example


    //Creating a Filter extension method for IList

    public static class FilterExtensionMethod
    {
        public static void Filter<T>(this IList<T> list, Func<T, bool> filter)
        {
            foreach (var item in list.ToList())
            {
                bool keepItem = filter(item);
                if (!keepItem)
                {
                    list.Remove(item);
                }
            }
        }
    }

    public class DelegateSamples3
    {
        public void Main()
        {
            var list = new List<string>
            {
                "Abe",
                "John",
                "Andrew",
                "Katherine",
            };


            Console.WriteLine();
            Console.WriteLine("Custom filter function");
            Console.WriteLine("==================");

            Console.WriteLine("List contents");
            Console.WriteLine();
            list.ForEach(item =>
            {
                Console.WriteLine(item);
            });

            Console.WriteLine();
            Console.WriteLine("Invoking filter function");
            Console.WriteLine();

            //Lets remove all names with 4 letters and bellow
            list.Filter((item) => item.Length > 4);

            Console.WriteLine("List contents after filter");
            Console.WriteLine();
            list.ForEach(item =>
            {
                Console.WriteLine(item);
            });

        }
    }
}
