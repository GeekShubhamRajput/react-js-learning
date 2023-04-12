type ListProps<T extends { id: number, first_name: string, last_name: string }> = {
  items: T[]
  onClick: (value: T) => void
}

export const List = <T extends { id: number, first_name: string, last_name: string }>({items, onClick}: ListProps<T>) => {
  return(
    <div>
      <h2>List of items</h2>
      <div>
        { 
          items.map((item, index)=>{
            return(
              <div key={item.id} onClick={()=>onClick(item)}>
                {item.first_name} {item.last_name}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
