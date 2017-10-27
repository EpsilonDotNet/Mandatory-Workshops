export default `
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
`;