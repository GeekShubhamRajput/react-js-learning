import './App.css';
import UserGreeting from "./components/UserGreeting"
import PersonList from "./components/PersonList"
import CarCompany from "./components/CarCompany"
import StyleSheet from "./components/StyleSheet"
import InlineCss from "./components/InlineCss"
import "./myStyle.css"
import "./appStyles.css"
import Styles from "./appStyles.module.css"

function App() {
  return (
    <div className="App">
      { /* <UserGreeting /> */ }
      { /* <PersonList /> */ }
      { /* <CarCompany /> */ }
      <h1 className="error" >Error</h1>
      <h1 className={Styles.success} >success</h1>
      <StyleSheet primary={false} />
      <InlineCss />
    </div>
  )
}

export default App;
