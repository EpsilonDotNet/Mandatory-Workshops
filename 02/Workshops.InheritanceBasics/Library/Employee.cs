using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library
{

    

    public abstract class Employee
    {
        public string Name { get; set; }

        public Employee(string name)
        {
            Name = name;
        }

        public virtual EmployeeRanks GetRank()
        {
            return EmployeeRanks.Normal;
        }

        protected abstract decimal GetSalary();

        public decimal GetYearlyIncome()
        {
            var salary = GetSalary();

            return salary * 12;
        }
    }
}
