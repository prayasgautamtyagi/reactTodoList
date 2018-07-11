import React, { Component } from 'react';

class  UserInput extends Component {

  submitInput = () => {
    //console.log(this.textInput.value);
    this.props.updateList(this.textInput.value);
  }

  render() {
    return (
      <div className="UserInput">
        <input type="text" ref={input => this.textInput = input}></input>
        <button type="submit" value="Submit" onClick={this.submitInput}>Add</button>
      </div>
    );
  }
}

export default UserInput;