import {useState} from "react"

type AuthUser = {
  name: string,
  email: string  
}

export const AuthUser = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)

  const handleLoggedIn =()=>{
    setUser({
      name: "Shubham",
      email: "shubham@example.com",
    })
  }

  return(
    <div>
      <button onClick={handleLoggedIn}>Loggin</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  )
}
