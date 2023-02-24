import React from 'react'
import useInput from "../hooks/useInput"

function UserForm(){
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler=(e)=>{
    e.preventDefault();
    alert(`First name : ${firstName} and Last Name : ${lastName}`)
    resetFirstName();
    resetLastName();
  }

  return(
    <div>
      <h1>User Registration</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label><b>First name: </b></label>
          <input {...bindFirstName} type="text" />
        </div>

        <div>
          <label><b>Last name: </b></label>
          <input {...bindLastName} type="text" />
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  )
}

export default UserForm
