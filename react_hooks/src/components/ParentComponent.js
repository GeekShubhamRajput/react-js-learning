import React, {useState, useCallback} from "react"
import Title from "./Title"
import Button from "./Button"
import Count from "./Count" 

function ParentComponent(){
  const [age, setAge] = useState(10)
  const [salary, setSalary] = useState(1000)

  const incrementAge=useCallback(()=>{
    console.log("Increment Age")
    setAge(age+1)
  }, [age]) 

  const incrementSalary=useCallback(()=>{
    console.log("Increment Salary")
    setSalary(salary + 1000) 
  }, [salary])

  return(
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}> Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
