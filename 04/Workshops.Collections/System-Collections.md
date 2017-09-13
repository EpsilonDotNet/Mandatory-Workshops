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

## System Collections Generic

### Dictionary

* key/value pair collection και οργανώνονται με βάση το key

### List

* Λίστα από objects προσπελάσιμα με βάση τo index

* Παρέχουν αναζήτηση, ταξινόμηση και μετασχηματισμό


### HashSet

### KeyValuePair -

### LinkedList -

### Queue

### Stack

### SortedDictionary

### SortedList

* Key/value pair collection 

### SortedSet

## System Collections Concurrent - Simple Example for all

### BlockingCollection

### ConcurrentBag

### ConcurrentDictionary

### ConcurrentQueue

### ConcurrentStack

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
