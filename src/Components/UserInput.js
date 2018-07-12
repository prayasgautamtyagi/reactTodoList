import React, { Component } from 'react';

class  UserInput extends Component {

  submitInput = () => {
    this.props.updateList(this.textInput.value);
    this.textInput.value = '';
  }

  handleKeyPress = (target) => {
    if(target.charCode === 13) {
      this.submitInput();
    }
  }

  render() {
    return (
      <div className="UserInput">
        <input type="text" ref={input => this.textInput = input} onKeyPress={this.handleKeyPress}></input>
        <button type="submit" value="Submit" onClick={this.submitInput}>Add</button>
      </div>
    );
  }
}

export default UserInput;