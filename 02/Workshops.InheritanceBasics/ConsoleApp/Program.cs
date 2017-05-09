using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var employees = new List<Employee>();
            employees.Add(new Waiter("Diamianos"));
            employees.Add(new Cook("Mitsos"));
            employees.Add(new Manager("Takis"));

            Console.WriteLine("Printing employees");
            Console.WriteLine("==================");
            Console.WriteLine();
            foreach (var employee in employees)
            {
                Console.Write("Employee Name: ");
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.Write(employee.Name);
                Console.ResetColor();
                Console.Write(", Type: ");
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.Write(employee.GetType().Name);
                Console.ResetColor();
                Console.Write(", Yearly Income: ");
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.Write(employee.GetYearlyIncome());
                Console.ResetColor();
                Console.Write(", Rank: ");
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.Write(employee.GetRank());
                Console.ResetColor();
                Console.WriteLine();
            }

            Console.ReadKey();
        }
    }
}
