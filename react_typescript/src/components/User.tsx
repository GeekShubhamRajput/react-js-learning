import {useState} from "react"

type AuthUser = {
  name: string,
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null)

  const handleLoggedOut = () => {
    setUser(null);
  }

  const handleLoggedIn = () => {
    setUser({
      name: "Shubham",
      email: "shubham@example.com"
    })
  }

  return(
    <div>
      <button onClick={handleLoggedIn}>login</button>
      <button onClick={handleLoggedOut}>logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
} 
