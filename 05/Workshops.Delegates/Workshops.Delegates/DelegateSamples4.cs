using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Workshops.Delegates
{
    //Events

    //Custom container with event

    public class Container<T>
    {
        private List<T> innerList = new List<T>();

        public event Action<T> OnAdd;

        public void Add(T item)
        {
            innerList.Add(item);
            OnAdd?.Invoke(item);
        }

        /*
         * Other methods
         */
    }


    public class DelegateSamples4
    {

        public void Main()
        {

            Console.WriteLine();
            Console.WriteLine("Custom container with event");
            Console.WriteLine("==================");

            Container<string> container = new Container<string>();
            container.OnAdd += (item) =>
            {
                Console.WriteLine($"Event 'OnAdd' triggered. Value: {item}");
            };

            Console.WriteLine();
            Console.WriteLine("Adding items to list");

            container.Add("Item 1");
            container.Add("Item 2");
        }
    }
}
