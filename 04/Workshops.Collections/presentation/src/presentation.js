// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Notes,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Calibri",
  secondary: "Candara"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            System Collections
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">ICollection</Heading>
          {<CodePane
            lang="javascript"
            source={require("./ICollection_sample.js").default}
            margin="20px auto"
         />}
            <Notes>
              <h1>Tell a little bit about ICollection</h1>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>IEnumerable</Heading>
          <List type="A">
            <Appear><ListItem>All System.Collections implement IEnumerable</ListItem></Appear>
            <Appear><ListItem>GetEnumerator offers iterations on Collections</ListItem></Appear>
          </List>
          <Appear><Text size={3} textColor="tertiary">Demo Time!</Text></Appear>
          <Notes>
            <ul>
              <li>Όλα τα System.Collections υλοποιούν το IEnumerable</li>
              <li>Προσφέρει επαναλήψεις πάνω στα Collection μέσω του GetEnumerator</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">System Collections Generic</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" caps>Dictionary</Heading>
          <List type="A">
            <Appear><ListItem>Key/Value pair collection organized by key</ListItem></Appear>
            <Appear><ListItem>Warning HashTable is an old .ΝΕΤ implentation replace with Dictionary</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>Key/Value pair collection και οργανώνονται με βάση το key</li>
              <li>Προσοχή το HashTable είναι παλαιότερη υλοποίηση του .ΝΕΤ αντικαταστήστε το με Dictionary</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>List</Heading>
          <List type="A">
            <Appear><ListItem>List of objects accessed by index</ListItem></Appear>
            <Appear><ListItem>Provides methods to search, sort, and manipulate lists</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>Λίστα από objects προσπελάσιμα με βάση τo index</li>
              <li>Παρέχουν αναζήτηση, ταξινόμηση και μετασχηματισμό</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">HashSet</Heading>
          <List type="A">
            <Appear><ListItem>C# implementation for Set Data Structure</ListItem></Appear>
            <Appear><ListItem>No duplicate items with no specific order</ListItem></Appear>
          </List>
          <Appear><Text size={3} textColor="primary">Demo Time!</Text></Appear>
          <Notes>
            <ul>
              <li>Είναι η υλοποίηση της C# για την δομή δεδομένων Σύνολο(Set)</li>
              <li>Δεν υπάρχουν διπλότυπα στοιχεία και δεν υπάρχει προκαθορισμένη σειρά.</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" caps>Queue</Heading>
          <List type="A">
            <Appear><ListItem>Data Structure for FIFO</ListItem></Appear>
          </List>
          <Notes>
            <h2>Παρέχει μία δομή FIFO</h2>
          </Notes>
        </Slide>  
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Stack</Heading>
          <List type="A">
            <Appear><ListItem>Data Structure for LIFO</ListItem></Appear>
          </List>
          <Notes>
            <h2>Παρέχει μία δομή LIFO</h2>
          </Notes>
        </Slide>    
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>KeyValuePair</Heading>
          <List type="A">
            <Appear><ListItem>Used internally by Dictionary</ListItem></Appear>
            <Appear><ListItem>No point in using it. Prefer Dictionary</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>Χρησιμοποιείται εσωτερικά από το Dictionary</li>
              <li>Δεν έχει νόημα να το χρησιμοποιήσουμε, προτιμούμε το Dictionary</li>
            </ul>
          </Notes>
        </Slide>  
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">LinkedList</Heading>
          <List type="A">
            <Appear><ListItem>Implemntation of Linked List Data Structure</ListItem></Appear>
          </List>
          <Notes>
            <h2>Υλοποίηση της δομής δεδομένων Συνδεδεμένης Λίστας</h2>
          </Notes>
        </Slide>   
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" caps>Sorted Collections</Heading>
          <List type="A">
            <Appear><ListItem>SortedDictionary</ListItem></Appear>
            <Appear><ListItem>SortedList</ListItem></Appear>
            <Appear><ListItem>SortedSet</ListItem></Appear>
          </List>
        </Slide>  
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>System Collections Concurrent</Heading>
          <List type="A">
            <Appear><ListItem>Provide thread safe access on shared data</ListItem></Appear>
            <Appear><ListItem>Improve scaling and performance of multi-threading apps</ListItem></Appear>
          </List>
          <Notes>
            <li>Παρέχουν thread safe προσπέλαση σε shared data</li>
            <li>Βελτιώνουν το scaling και την απόδοση των εφαρμογών multi-threading</li>
          </Notes>
        </Slide>  
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">BlockingCollection</Heading>
          <List type="A">
            <Appear><ListItem>Producer Consumer pattern implementation</ListItem></Appear>
            <Appear><ListItem>Inserts and remove items in multi-threading matter</ListItem></Appear>
            <Appear><ListItem>Accepts max capacity as an optional parameter </ListItem></Appear>
            <Appear><ListItem>Provides cancellation</ListItem></Appear>
            <Appear><ListItem>Adds Non Blocking TryAdd &amp; TryTake</ListItem></Appear>
          </List>
          <Appear><Text size={3} textColor="primary">Demo Time!</Text></Appear>
          <Notes>
            <ul>
              <li>Υλοποίηση του Producer Consumer pattern</li>
              <li>Προσθέτει και αφαιρεί αντικείμενα από πολλαπλά thread</li>
              <li>Παίρνει ως προαιρετική παράμετρο μέγιστη χωρητικότητα</li>
              <li>Παρέχει cancellation</li>
              <li>Τα TryAdd και TryTake δεν είναι blocking</li>
            </ul>
          </Notes>
        </Slide>    
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" caps>ConcurrentBag</Heading>
          <List type="A">
            <Appear><ListItem>Υλοποίηση του Work stealing algorithm</ListItem></Appear>
            <Appear><ListItem>Thread Safe υλοποίηση για αντικείμενα ενός collection χωρίς προκαθορισμένη σειρά.</ListItem></Appear>
          </List>
          <Appear><Text size={3} textColor="tertiary">Demo Time!</Text></Appear>
          <Notes>
            <p>In parallel computing, work stealing is a scheduling strategy for multithreaded computer programs.</p>
            <p>It solves the problem of executing a dynamically multithreaded computation, one that can "spawn" new threads of execution, on a statically multithreaded computer, with a fixed number of processors (or cores).</p>
            <p>It does so efficiently both in terms of execution time, memory usage, and inter-processor communication.</p>
          </Notes>
        </Slide>   
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>ConcurrentDictionary</Heading>
          <List type="A">
            <Appear><ListItem>Thread Safe υλοποίηση του Dictionary</ListItem></Appear>
          </List>
          <Appear><Text size={3} textColor="tertiary">Demo Time!</Text></Appear>
        </Slide> 
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">ConcurrentQueue</Heading>
          <List type="A">
            <Appear><ListItem>Thread sage Ουρά</ListItem></Appear>
          </List>
          <Appear><Text size={3} textColor="primary">Demo Time!</Text></Appear>
        </Slide>  
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" caps>ConcurrentStack</Heading>
          <List type="A">
            <Appear><ListItem>Thread safe Στοίβα</ListItem></Appear>
          </List>
          <Appear><Text size={3} textColor="tertiary">Demo Time!</Text></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>System Collections ​Specialized</Heading>
        </Slide>  
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">HybridDictionary</Heading>
          <List type="A">
            <Appear><ListItem>Χρησιμοποιείται όπως το Dictionary</ListItem></Appear>
            <Appear><ListItem>Προτείνετε σε περιπτώσεις όπου έχουμε άγνωστο αριθμό στοιχείων.</ListItem></Appear>
            <Appear><ListItem>Σε μικρά collection χρησιμοποιεί το ListDictionary και σε μεγάλα collection το HashTable</ListItem></Appear>
          </List>
        </Slide>   
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" caps>ListDictionary</Heading>
          <List type="A">
            <Appear><ListItem>Προτείνεται για λιγότερα αντικείμενα από 10</ListItem></Appear>
            <Appear><ListItem>Δεν χρησιμοποιείτε για μεγάλα collection</ListItem></Appear>
          </List>
          <Appear><Text size={3} textColor="tertiary">Demo Time!</Text></Appear>
        </Slide>     
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>That's it</Heading>
          <Heading size={3} textColor="tertiary" caps>Thank for not sleeping</Heading>
          <Heading size={3} textColor="tertiary" caps>PRs & Issues are welcome</Heading>
        </Slide>      
      </Deck>
    );
  }
}