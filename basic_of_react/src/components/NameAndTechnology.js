import React, {Component} from 'react'

class NameAndTechnology extends Component{
  render(){
    return(
      <div>
        <h4> My name is {this.props.name} and I am {this.props.technologyName} developer </h4>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default NameAndTechnology
