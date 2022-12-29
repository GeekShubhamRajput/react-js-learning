import React, {Component} from 'react'

class LifecycleB extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: "Shubham"
    }

    console.log("Lifecycle B constructor")
  }

  static getDerivedStateFromProps(){
    console.log("Lifecycle B getDerivedStateFromProps")
    return null
  }

  componentDidMount(){
    console.log("Lifecycle B componentDidMount")
    return null
  }

  render(){
    console.log("Lifecycle B render")
    return(
      <div>
        <h4>Component Lifecycle B</h4>
      </div>
    )
  }
}

export default LifecycleB
