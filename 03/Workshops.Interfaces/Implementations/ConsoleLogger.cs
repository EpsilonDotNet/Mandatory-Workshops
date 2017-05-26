using Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Implementations
{
    public class ConsoleLogger : ILogger
    {
        public void WriteLog(string message)
        {
            Console.WriteLine($"{DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss")} => {message}");
        }
    }
}
