import React, {Component} from 'react'
import RegularComp from "./RegularComp"
import PureComp from "./PureComp"

class ParentComp extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: "Shubham"
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Shubham'
      })
    }, 2000)
  }

  render(){
    console.log('*********Parent Comp render************')
    return(
      <div>
        <h2>Parent PureComponent</h2>
        <RegularComp name={this.state.name}></ RegularComp>
        <PureComp name={this.state.name}></ PureComp>
      </div>
    )
  }
}

export default ParentComp
