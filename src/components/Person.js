import React from 'react'

function Person({person}){
  return(
    <div>
      <h4>
        I am {person.name}. I am {person.age} yr old. I know {person.skill}
      </h4>
    </div>
  )
}

export default Person
