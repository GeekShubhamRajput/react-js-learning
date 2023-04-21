import {Button} from "./components/html/Button"
import {Input} from "./components/html/Input"
import './App.css';

function App() {
  return (
    <div className="App">
      <Button variant='primary' onClick = {() => console.log('Clicked')}>Primary Button</Button>
      <br />
      <Input />
    </div>
  );
}

export default App;
