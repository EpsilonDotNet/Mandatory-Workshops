using Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;

namespace Implementations
{
    public class DatabaseCustomerRepository : ICustomerRepository
    {
        public Customer GetCustomerById(int id)
        {
            //Code ommited for simplicity:
            //Perform select query and return the object

            return new Customer()
            {
                Id = id,
                Name = "Andrew (from database)"
            };
        }
    }
}
