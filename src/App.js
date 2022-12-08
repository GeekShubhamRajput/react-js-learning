import './App.css';
import NameAndRole from './components/NameAndRole'
import NameAndTechnology from './components/NameAndTechnology'

function App() {
  return (
    <div className="App">
      <NameAndRole name="Shubham" roleName="Sr. Software Engineer">This is inside component</NameAndRole>
      <NameAndTechnology name="John" technologyName="Ruby"> This is inner para </NameAndTechnology>
    </div>
  )
}

export default App;
