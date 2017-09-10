using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Workshops.Delegates
{


    public class DelegateSamples1
    {

        // What is a delegate
        // ==================
        // A delegate is a type that represents references to methods with a particular parameter list and return type.

        public delegate void DoWorkDelegate();

        public delegate string DoWorkAndReturnStuffDelegate(string input);

        public void DoWork()
        {
            Console.WriteLine("Work done !");
        }

        public string DoWorkAndReturnStuff(string parameter)
        {
            string result = "myValue";
            Console.WriteLine($"Work done with parameter '{parameter}' and returning '{result}'");

            return result;
        }

        public void DoOtherWork()
        {
            Console.WriteLine("Other Work done !");
        }

        public void Main()
        {

            //Assigning an existing function
            DoWorkDelegate doWorkDelegate = DoWork;



            //Assigning to an anonymous method (C# 2.0)
            DoWorkDelegate anonymousFunctionDelegate = delegate ()
            {
                Console.WriteLine("Work done from anonymous function !");
            };



            //Assigning to an anonymous method (C# 3.0)
            DoWorkDelegate lambdaDelegate = () => Console.WriteLine("Work done from lambda expression !");




            //Invoking a delegate's method
            doWorkDelegate.Invoke();
            anonymousFunctionDelegate.Invoke();
            lambdaDelegate.Invoke();



            //Method chaining
            Console.WriteLine();
            Console.WriteLine("Method chaining");
            Console.WriteLine("==================");
            doWorkDelegate += DoOtherWork;
            doWorkDelegate.Invoke();



            //Using a delegate with params and a return type

            Console.WriteLine();
            Console.WriteLine("Delegate with params and a return type");
            Console.WriteLine("==================");

            DoWorkAndReturnStuffDelegate delegateWithParamsAndReturnType = DoWorkAndReturnStuff;

            string result = delegateWithParamsAndReturnType.Invoke("Test input");
            Console.WriteLine($"Delegate invocation result: {result}");
            
           

        }



    }
}
