using Contracts;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Implementations
{
    public class FileLogger : ILogger
    {
        private string _logFilePath;

        public FileLogger(string logFilePath)
        {
            _logFilePath = logFilePath;
        }

        public void WriteLog(string message)
        {
            File.AppendAllText(_logFilePath, $"{DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss")} => {message}{Environment.NewLine}");
        }
    }
}
