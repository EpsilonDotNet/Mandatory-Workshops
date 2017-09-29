using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Collections.GetEnumerator
{
    // Collection of Person objects. This class
    // implements IEnumerable so that it can be used
    // with ForEach syntax.
    public class People : IEnumerable
    {
        private Person[] _people;
        public People(Person[] personArray)
        {
            _people = new Person[personArray.Length];
            for (int i = 0; i < personArray.Length; i++)
            {
                _people[i] = personArray[i];
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return (IEnumerator) GetEnumerator();
        }

        public PeopleEnum GetEnumerator()
        {
            return new PeopleEnum(_people);
        }
    }
}
