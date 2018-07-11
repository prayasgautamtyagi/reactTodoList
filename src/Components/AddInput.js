import React, { Component } from 'react';

class  AddInput extends Component {

  handleRemove = (key) => {
    this.props.deleteItem(key);
  }

  fetchList = () => {
    return this.props.listData.map(item => (<div  className="AddInput" key={item.key}><span>{item.text}</span><button onClick={() => this.handleRemove(item.key)}>X</button></div>))
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