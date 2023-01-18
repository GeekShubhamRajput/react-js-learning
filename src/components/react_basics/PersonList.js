import React from 'react'
import Person from './Person'

function PersonList(){
  var people = [ { id: 1, name: "John", age: 21, skill: "React" }, { id: 2, name: "Clark", age: 22, skill: "Vue" }, { id: 3, name: "Mark", age: 23, skill: "Angular" }]
  
  const personList = people.map(person => (<Person key={person.id} person={person}></Person>))
   
  return <div>{personList}</div>
}

export default PersonList
