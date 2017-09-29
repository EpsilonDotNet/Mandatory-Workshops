# System Collections

* Είναι μία συλλογή από δυναμικά strong-typed objects
* Η βασική διαφορά με τα Arrays είναι ότι μπορούν να αλλάζουν δυναμικά σε μέγεθος
* Όλα τα Collections υλοποιούν το interface ICollection

---

## ICollection

```csharp
public interface ICollection<T> : IEnumerable<T>, IEnumerable
{
    //Adds an item to Collection
    void Add(T item);
    //Removes an item from Collection
    bool Remove(T item);
    //Removes all items from Collection
    void Clear();
    //Determines if the collection contains a specific value
    bool Contains(T item);
    //Copies Collection Elements to an Array
    void CopyTo(T[] array, int arrayIndex);
    //Gets number of elements contained in the collection
    int Count { get; }
    //Gets a value indicating if Collection is readonly
    bool IsReadOnly { get; }
}
```

---

## IEnumerable

* Όλα τα System.Collections υλοποιούν το IEnumerable
* Προσφέρει επαναλήψεις πάνω στα Collection μέσω του GetEnumerator
* Code sample


## System Collections Generic

### Dictionary

* key/value pair collection και οργανώνονται με βάση το key

### List

* Λίστα από objects προσπελάσιμα με βάση τo index

* Παρέχουν αναζήτηση, ταξινόμηση και μετασχηματισμό

### HashSet

* Είναι η υλοποίηση της C# για την δομή δεδομένων Σύνολο(Set)

* Δεν υπάρχουν διπλότυπα στοιχεία και δεν υπάρχει προκαθορισμένη σειρά.

### Queue

* Παρέχει μία δομή FIFO

### Stack

* Παρέχει μία δομή LIFO

### KeyValuePair

* Χρησιμοποιείται εσωτερικά από το Dictionary
* Δεν έχει νόημα να το χρησιμοποιήσουμε, προτιμούμε το Dictionary

### LinkedList

* Υλοποίηση της δομής δεδομένων Συνδεδεμένης Λίστας

### SortedDictionary

### SortedList

### SortedSet

## System Collections Concurrent - Simple Example for all

* Παρέχουν thread safe πρόσβαση σε κοινόχρηστα data

* Βελτιώνουν το scaling και την απόδοση των εφαρμογών multi-theading

### BlockingCollection

### ConcurrentBag

### ConcurrentDictionary

### ConcurrentQueue

* Thread sage Ουρά

### ConcurrentStack

* Thread safe Στοίβα

### OrderablePartitioner --

### Partitioner --

## System Collections ​Specialized

### HybridDictionary - Tell how it works

### ListDictionary

### OrderedDictionary

---

### IEnumerable

### IOrdered

### ICollection

### IComparable
