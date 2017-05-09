using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library
{
    public class Waiter : Employee
    {
        public Waiter(string name) : base(name)
        {
        }

        protected override decimal GetSalary()
        {
            return 700;
        }
    }
}
