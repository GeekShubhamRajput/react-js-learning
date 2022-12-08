import React from 'react'

const NameAndRole = (props) => {
  return(
    <div>
      <h4> My name is {props.name} and I am {props.roleName} .</h4>
      <p> { props.children } </p>
    </div>  
  )
}

export default NameAndRole
