import React, { Component } from 'react';
import UserInput from './UserInput'
import AddInput from './AddInput'

class Container extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
    }
  }

  updateList = (input) =>{
    //let data = this.state.data;
    let newItem = {
      text: input,
      key: Date.now()
    };
    console.log(newItem);
    if(newItem !== ""){
     this.setState({
          data: [...this.state.data, newItem]
      })
    }
  }

  deleteItem = (key) => {
    let filetredItems = this.state.data.filter( (Item) => {
      return (Item.key !== key);
    });
    this.setState({
      data: filetredItems
    })
  }

  render() {
    return (
      <div className="Container">
        <UserInput key="child1" updateList={this.updateList}/>
        <AddInput listData = {this.state.data} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default Container;