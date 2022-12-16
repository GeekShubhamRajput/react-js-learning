import React from 'react'
import Person from './Person'

function PersonList(){
  var people = [ { name: "John", age: 21, skill: "React" }, { name: "Clark", age: 22, skill: "Vue" }, { name: "Mark", age: 23, skill: "Angular" }]
  
  const personList = people.map(person => (<Person person={person}></Person>))
   
  return <div>{personList}</div>
}

export default PersonList
