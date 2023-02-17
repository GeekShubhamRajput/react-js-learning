import React from 'react'
import './App.css';
import ComponentA  from "./components/ComponentA"

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return(
    <div className="App">
      <UserContext.Provider value={"Shubh"}>
        <ChannelContext.Provider value={"RailsVlog"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App;
