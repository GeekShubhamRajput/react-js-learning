import {Greet} from "./components/Greet"
import {Person} from "./components/Person"
import {PersonList} from "./components/PersonList"
import {Status} from "./components/Status"
import {Heading} from "./components/Heading"
import {Oscar} from "./components/Oscar"
import {Button} from "./components/Button"
import {Input} from "./components/Input"
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
      <Oscar><h1>This is from app component for Oscar component</h1></Oscar>
      <Greet name="John" isLoggedIn={true} />
      <Button handleClick={(event, id)=>{console.log('Button clicked', event, id)}} />
      <br/><br/>
      <Input value="" handleChange={event => console.log(event)} />
    </div>
  );
}

export default App;
