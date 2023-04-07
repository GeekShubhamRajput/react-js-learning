import {useContext} from 'react'
import {UserContext} from "./UserContext"

export const User = () => {
  const userContext = useContext(UserContext)
  
  const handleLoggedIn = () => {
    if(userContext){
      userContext.setUser({
        name: "Shubham",
        email: "shubham@example.com",
      })
    }
  }

  const handleLoggedOut = () => {
    if(userContext){
      userContext.setUser(null)
    }
  }
  
  return(
    <div>
      <button onClick={handleLoggedIn}>login</button>
      <button onClick={handleLoggedOut}>logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  )
} 
