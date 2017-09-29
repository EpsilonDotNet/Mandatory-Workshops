using System;
using System.Collections.Generic;
using System.Text;

namespace Collections.GetEnumerator
{
    public class GetEnumeratorExample
    {
        public void Execute()
        {
            Person[] peopleArray = new Person[3]
{
                //Pass firstName and lastName in the constructor
                new Person("John","Doe"),
                new Person("Jack","White"),
                new Person("Robert","Plant")
};

            People peopleList = new People(peopleArray);
            foreach (Person p in peopleList)
                Console.WriteLine($"{p.firstName} {p.lastName}");

            Console.Read();
        }
    }
}
