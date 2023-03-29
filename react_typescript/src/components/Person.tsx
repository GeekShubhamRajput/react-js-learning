import { PersonProps } from "./Person.types"

export const Person = (props: PersonProps) =>{
  return <h3>{props.name.first} {props.name.last}</h3>
}
