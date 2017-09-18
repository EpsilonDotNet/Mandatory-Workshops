using Collections.Performance;
using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace Collections
{
    class Program
    {
        static void Main(string[] args)
        {
            //Performance 
            var hashSetVsListInstance = new HashSetVsList();
            hashSetVsListInstance.Execute();


        }
    }
}
