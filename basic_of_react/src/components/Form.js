import React, {Component} from 'react'

class Form extends Component{

  constructor(props){
    
    super(props);

    this.state = {
      username: '',
      comment: '',
      languages: []
    }
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  handleCommentChange = (event) => {
    this.setState({comment: event.target.value}) 
  }

  handleLanguageChange = (event) => {
    let value = Array.from(event.target.selectedOptions, option => option.value);
    this.setState({languages: value});
  }

  handleSubmit = (event) => {
    alert(`Username: ${this.state.username} Comment: ${this.state.comment} Language: ${this.state.languages}`)
    event.preventDefault();
  }

  render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </div>
          <div>  
            <label>Comment</label>
            <input type="textarea" value={this.state.comment} onChange={this.handleCommentChange} />
          </div>
          <div>
            <label>Language</label>
            <select multiple={true} value={this.state.languages} onChange={this.handleLanguageChange}>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
              <option value="react">React</option>
            </select>
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    )
  }

}

export default Form
