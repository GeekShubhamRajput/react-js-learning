import { Name } from "./Person.types"

type personListProps = {
  names: Name[]
}

export const PersonList = (props: personListProps) =>{
  return(
    <div>
      { props.names.map((name) => {
          return(
            <h4 key={name.first}>
              {name.first} {name.last}
            </h4>
          )
        })
      }
    </div>
  )
}
