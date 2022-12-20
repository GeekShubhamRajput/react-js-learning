import './App.css';
import UserGreeting from "./components/UserGreeting"
import PersonList from "./components/PersonList"
import CarCompany from "./components/CarCompany"
import "./myStyle.css"
import StyleSheet from "./components/StyleSheet"
import InlineCss from "./components/InlineCss"

function App() {
  return (
    <div className="App">
      { /* <UserGreeting /> */ }
      { /* <PersonList /> */ }
      { /* <CarCompany /> */ }
      <StyleSheet primary={false} />
      <InlineCss />
    </div>
  )
}

export default App;
