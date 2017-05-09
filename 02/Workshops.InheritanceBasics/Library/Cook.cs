using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library
{
    public class Cook : Employee
    {
        public Cook(string name) : base(name)
        {
        }

        protected override decimal GetSalary()
        {
            return 900;
        }
    }
}
