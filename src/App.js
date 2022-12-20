import './App.css';
import UserGreeting from "./components/UserGreeting"
import PersonList from "./components/PersonList"
import CarCompany from "./components/CarCompany"
import "./myStyle.css"
import StyleSheet from "./components/StyleSheet"

function App() {
  return (
    <div className="App">
      { /* <UserGreeting /> */ }
      { /* <PersonList /> */ }
      { /* <CarCompany /> */ }
      <StyleSheet primary={false} />
    </div>
  )
}

export default App;
