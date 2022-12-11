import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import ChildComponent1 from './ChildComponent1';


class ParentComponent extends Component{
  constructor(props){
    super(props)

    this.state = {
      parentName: "parent"
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render(){
    return(
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
        <ChildComponent1 greetHandler={this.greetParent}/>
      </div>
    );
  }

}

export default ParentComponent
