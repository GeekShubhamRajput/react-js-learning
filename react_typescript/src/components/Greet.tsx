type GreetProps = {
  name: string
  messageCount: number
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  return(
    <div>
      {
        props.isLoggedIn ? <h3>Welcome {props.name}! You have {props.messageCount} unread msgs.</h3> : <h3>Welcome Guest</h3>
      }
    </div>
  )
}
