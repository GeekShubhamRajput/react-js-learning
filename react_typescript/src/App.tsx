import {List} from "./components/generics/List"
import './App.css';

function App() {
  return (
    <div className="App">

      <List items={[
          {
            id: 1, first_name: 'John', last_name: 'Doe'
          },
          {
            id: 2, first_name: 'Micle', last_name: 'Clark'
          },
        ]}
        onClick={(item)=> console.log(item)} />
    </div>
  );
}

export default App;
