import { useState } from "react"

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggedIn = () => {
    setIsLoggedIn(true)
  }

  const handleLoggedOut = () => {
    setIsLoggedIn(false)
  }

  return(
    <div>
      <button onClick={handleLoggedIn}>login</button>
      <button onClick={handleLoggedOut}>logout</button>
      <div>User is { isLoggedIn ? "logged in" : "logged out" } </div>
    </div>
  )
}
