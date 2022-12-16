import './App.css';
import UserGreeting from "./components/UserGreeting"
import PersonList from "./components/PersonList"
import CarCompany from "./components/CarCompany"

function App() {
  return (
    <div className="App">
      { /* <UserGreeting /> */ }
      <PersonList />
      <CarCompany />
    </div>
  )
}

export default App;
