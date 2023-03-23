type GreetProps = {
  name: string
}

export const Greet = (props: GreetProps) => {
  return(
    <div>
      <h3>Welcome {props.name}! You have 10 unread msgs.</h3>
    </div>
  )
}
