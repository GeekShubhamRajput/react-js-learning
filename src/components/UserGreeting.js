import React, {Component} from 'react'

class UserGreeting extends Component{

  constructor(props){
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  render(){
  /* simple if else

    if(this.state.isLoggedIn){
      return <div>Welcome Shubham</div>
    }else{
      return <div>Welcome Guest</div> 
    }
  */

  /* using variable 

    let message
    if(this.state.isLoggedIn){
      message = <div>Welcome Shubham</div>       
    }else{
      message = <div>Welcome Guest</div> 
    }

    return <div>{message}</div>
  */

  /* ternary operator

    return this.state.isLoggedIn ? <div>Welcome Shubham</div> : <div>Welcome Guest</div>
  */

  /* logical way */
    return this.state.isLoggedIn && <div>Welcome Shubham</div>
  }
}

export default UserGreeting
