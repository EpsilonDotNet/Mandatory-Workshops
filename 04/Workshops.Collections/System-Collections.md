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

## System Collections Generic

### Dictionary

* key/value pair collection και οργανώνονται με βάση το key
* Προσοχή το HashTable είναι παλαιότερη υλοποίηση του .ΝΕΤ αντικαταστήστε το με Dictionary

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

* Παρέχουν thread safe access σε shared data

* Βελτιώνουν το scaling και την απόδοση των εφαρμογών multi-threading

### BlockingCollection

* Υλοποίηση του Producer Consumer pattern
* Προσθέτει και αφαιρεί αντικείμενα από πολλαπλά thread
* Παίρνει ως προαιρετική παράμετρο μέγιστη χωρητικότητα
* Παρέχει cancellation
* Τα TryAdd και TryTake δεν είναι blocking

### ConcurrentBag

* Υλοποίηση του Work stealing algorithm
* Thread Safe υλοποίηση για αντικείμενα ενός collection χωρίς προκαθορισμένη σειρά.

[comment]: (In parallel computing, work stealing is a scheduling strategy for multithreaded computer programs. It solves the problem of executing a dynamically multithreaded computation, one that can "spawn" new threads of execution, on a statically multithreaded computer, with a fixed number of processors (or cores). It does so efficiently both in terms of execution time, memory usage, and inter-processor communication.)

### ConcurrentDictionary

* Thread Safe υλοποίηση του Dictionary

### ConcurrentQueue

* Thread sage Ουρά

### ConcurrentStack

* Thread safe Στοίβα

## System Collections ​Specialized

### HybridDictionary

* Χρησιμοποιείται όπως το Dictionary
* Προτείνετε σε περιπτώσεις όπου έχουμε άγνωστο αριθμό στοιχείων.
* Σε μικρά collection χρησιμοποιεί το ListDictionary και σε μεγάλα collection το HashTable

### ListDictionary

* Προτείνεται για λιγότερα αντικείμενα από 10
* Δεν χρησιμοποιείτε για μεγάλα collection

### OrderedDictionary