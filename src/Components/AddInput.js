import React, { Component } from 'react';

class  AddInput extends Component {
  handleRemove = (key) => {
    this.props.deleteItem(key);
  }

  toggleOnComplete = (key) => { 
   this.props.toggleCompleted(key);
  }

  fetchList = () => {
    return (
      this.props.listData.map(item => (
        <div
          className={item.completed === false ? "AddInput" : "toggleOnComplete"}
          key={item.key}
        >
          <span onClick={() => this.toggleOnComplete(item.key)}>
            {item.text}
          </span>
          <button onClick={() => this.handleRemove(item.key)}>X</button>
        </div>)
      )
    )
  }  

  render() {
    return (
      <div>
        {this.fetchList()}
      </div>
    );
  }
}

export default AddInput;