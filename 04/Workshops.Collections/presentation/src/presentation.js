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
            <Appear><ListItem>Όλα τα System.Collections υλοποιούν το IEnumerable</ListItem></Appear>
            <Appear><ListItem>Προσφέρει επαναλήψεις πάνω στα Collection μέσω του GetEnumerator</ListItem></Appear>
          </List>
          <Appear><Text size={3} textColor="tertiary">Demo Time!</Text></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">System Collections Generic</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" caps>Dictionary</Heading>
          <List type="A">
            <Appear><ListItem>key/value pair collection και οργανώνονται με βάση το key</ListItem></Appear>
            <Appear><ListItem>Προσοχή το HashTable είναι παλαιότερη υλοποίηση του .ΝΕΤ αντικαταστήστε το με Dictionary</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>List</Heading>
          <List type="A">
            <Appear><ListItem>Λίστα από objects προσπελάσιμα με βάση τo index</ListItem></Appear>
            <Appear><ListItem>Παρέχουν αναζήτηση, ταξινόμηση και μετασχηματισμό</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">HashSet</Heading>
          <List type="A">
            <Appear><ListItem>Είναι η υλοποίηση της C# για την δομή δεδομένων Σύνολο(Set)</ListItem></Appear>
            <Appear><ListItem>Δεν υπάρχουν διπλότυπα στοιχεία και δεν υπάρχει προκαθορισμένη σειρά.</ListItem></Appear>
          </List>
          <Appear><Text size={3} textColor="primary">Demo Time!</Text></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" caps>Queue</Heading>
          <List type="A">
            <Appear><ListItem>Παρέχει μία δομή FIFO</ListItem></Appear>
          </List>
        </Slide>  
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Stack</Heading>
          <List type="A">
            <Appear><ListItem>Παρέχει μία δομή LIFO</ListItem></Appear>
          </List>
        </Slide>    
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>KeyValuePair</Heading>
          <List type="A">
            <Appear><ListItem>Χρησιμοποιείται εσωτερικά από το Dictionary</ListItem></Appear>
            <Appear><ListItem>Δεν έχει νόημα να το χρησιμοποιήσουμε, προτιμούμε το Dictionary</ListItem></Appear>
          </List>
        </Slide>  
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">LinkedList</Heading>
          <List type="A">
            <Appear><ListItem>Υλοποίηση της δομής δεδομένων Συνδεδεμένης Λίστας</ListItem></Appear>
          </List>
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
            <Appear><ListItem>Παρέχουν thread safe access σε shared data</ListItem></Appear>
            <Appear><ListItem>Βελτιώνουν το scaling και την απόδοση των εφαρμογών multi-threading</ListItem></Appear>
          </List>
        </Slide>  
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">BlockingCollection</Heading>
          <List type="A">
            <Appear><ListItem>Υλοποίηση του Producer Consumer pattern</ListItem></Appear>
            <Appear><ListItem>Προσθέτει και αφαιρεί αντικείμενα από πολλαπλά thread</ListItem></Appear>
            <Appear><ListItem>Παίρνει ως προαιρετική παράμετρο μέγιστη χωρητικότητα</ListItem></Appear>
            <Appear><ListItem>Παρέχει cancellation</ListItem></Appear>
            <Appear><ListItem>Τα TryAdd και TryTake δεν είναι blocking</ListItem></Appear>
          </List>
          <Appear><Text size={3} textColor="primary">Demo Time!</Text></Appear>
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