using Contracts;
using Implementations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApp
{
    class Program
    {

        /// <summary>
        /// An interface defines the behavior that a class has, but not how this behavior is implemented. Interfaces stand as separate constructs from classes,
        /// but they require a class to provide the working code to fulfill the interface.
        /// </summary>

        static void Main(string[] args)
        {

            ///The implementations are interchangeable
            
            ILogger logger = new ConsoleLogger();
            ///================== OR ===================
            ///ILogger logger = new FileLogger("log.txt");
            


            ICustomerRepository customerRepository = new DatabaseCustomerRepository();
            ///================== OR ===================
            ///ICustomerRepository customerRepository = new AzureCustomerRepository();


            var customer = customerRepository.GetCustomerById(1);

            logger.WriteLog($"Customer name: {customer.Name}");


            Console.ReadKey();
        }
    }
}
