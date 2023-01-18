import React from "react"

const UserContext = React.createContext("John Doe")
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer 

export {UserProvider, UserConsumer}
