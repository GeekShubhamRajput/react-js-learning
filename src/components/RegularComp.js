import React, {Component} from 'react'

class RegularComp extends Component{

  render(){
    console.log(' Regular Comp render ')
    return(
      <div>
        <h3>Regular Component - {this.props.name}</h3>
      </div>
    )
  }

}

export default RegularComp
