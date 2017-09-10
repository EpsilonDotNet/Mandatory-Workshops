using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Workshops.Delegates
{
    public class DelegateSamples2
    {


        private void DoWork()
        {
            Console.WriteLine("Work done !");
        }


        public void Main()
        {

            //Using .NET's predefined delegate: Action
            Console.WriteLine();
            Console.WriteLine("Invoking Action");
            Console.WriteLine("==================");
            Action action = DoWork;
            action.Invoke();


            Console.WriteLine();
            Console.WriteLine("Invoking action with parameter");
            Console.WriteLine("==================");

            Action<string> actionWithParameter = (parameter) =>
            {
                Console.WriteLine($"Action with parameter called. Parameter value: {parameter}");
            };

            actionWithParameter.Invoke("Hello Word!");




            //Using .NET's other predefined delegate: Func

            Func<int, int, int> addFunc = (int a, int b) =>
            {
                Console.WriteLine($"Invoking Func: '{a}' plus '{b}'");
                return a + b;
            };

            int funcResult = addFunc.Invoke(4, 5);
            Console.WriteLine($"Result of Func invocation: {funcResult}");


        }
    }
}
