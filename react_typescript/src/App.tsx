import {Greet} from "./components/Greet"
import {Person} from "./components/Person"
import {PersonList} from "./components/PersonList"
import {Status} from "./components/Status"
import {Heading} from "./components/Heading"
import './App.css';

function App() {

  const personName = {
    first: "Shubham",
    last: "Rajput",
  }

  const nameList = [
    { 
      first: 'John',
      last: 'Wayne'
    },
    { 
      first: 'B',
      last: 'Putin'
    },
    { 
      first: 'Bella',
      last: 'T'
    }
  ]
  
  return (
    <div className="App">
      <Greet name="Shubham" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>This is from app</Heading>
    </div>
  );
}

export default App;
