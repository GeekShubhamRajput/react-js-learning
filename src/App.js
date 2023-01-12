import './App.css';
import ComponentA from "./components/ComponentA"
import {UserProvider} from "./components/UserContext"

function App() {
  return (
    <div className="App">
      <UserProvider value="Shubham">
        <ComponentA />
      </ UserProvider>
    </div>
  )
}

export default App;
