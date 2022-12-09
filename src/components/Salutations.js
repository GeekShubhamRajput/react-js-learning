import React, {Component} from 'react'

class Salutations extends Component{
  constructor(props){
    super()
  }

  render(){
    const {name, roleName} = this.props
    
    return <h1>I am {name} and I am {roleName}</h1>
  }
}

export default Salutations
