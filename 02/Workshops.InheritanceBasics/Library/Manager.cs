using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library
{
    public class Manager : Employee
    {
        public Manager(string name) : base(name)
        {
        }

        public override EmployeeRanks GetRank()
        {
            return EmployeeRanks.High;
        }

        protected override decimal GetSalary()
        {
            return 1500;
        }
    }
}
