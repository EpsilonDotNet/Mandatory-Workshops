using Contracts;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Implementations
{
    public class AzureCustomerRepository : ICustomerRepository
    {
        public Customer GetCustomerById(int id)
        {
            //Code ommited for simplicity:
            //Perform a web request to Azure storage and get customer

            return new Customer()
            {
                Id = id,
                Name = "Andrew (from azure)"
            };
        }
    }
}
