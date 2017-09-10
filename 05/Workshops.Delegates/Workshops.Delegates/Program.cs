using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Workshops.Delegates
{
    public class Program
    {

        static void Main(string[] args)
        {
            var sample1 = new DelegateSamples1();
            sample1.Main();

            var sample2 = new DelegateSamples2();
            sample2.Main();

            var sample3 = new DelegateSamples3();
            sample3.Main();

            var sample4 = new DelegateSamples4();
            sample4.Main();

            Console.ReadKey();
        }
    }
}
