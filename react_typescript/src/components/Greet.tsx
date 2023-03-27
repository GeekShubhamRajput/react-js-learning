type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  const { messageCount = 2} = props
  
  return(
    <div>
      {
        props.isLoggedIn ? <h3>Welcome {props.name}! You have {messageCount} unread msgs.</h3> : <h3>Welcome Guest</h3>
      }
    </div>
  )
}
