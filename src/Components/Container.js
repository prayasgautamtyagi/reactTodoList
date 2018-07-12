import React, { Component } from 'react';
import UserInput from './UserInput'
import AddInput from './AddInput'
import ItemFilters from './ItemFilters'

class Container extends Component {
  
  state = { data: [], filterBy: '' }

  updateList = (input) =>{
    let newItem = {
      text: input,
      key: Date.now(),
      completed: false
    };

    if(input !== ""){
     this.setState({
        data: [...this.state.data, newItem],
      })
    }
  }

  toggleCompleted = (key) => {
    const { data } = this.state;
    data.map(item => {
      if (item.key === key) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({ data });
  }

  deleteItem = (key) => {
    let filteredItems = this.state.data.filter( (Item) => {
      return (Item.key !== key);
    });
    this.setState({
      data: filteredItems,
    })
  }

  filterList = (filter) => {
    this.setState({
      filterBy: filter,
    })
  }

  renderList = () => {
    const { data } = this.state;
    const filteredList = data.filter(item => {
      switch (this.state.filterBy) {
        case 'all': return (item);
        case 'active': return (item.completed === false);
        case 'done': return (item.completed === true);
        default: return (item);
      }
    });
    return <AddInput 
              listData = {filteredList} 
              deleteItem={this.deleteItem} 
              toggleCompleted={this.toggleCompleted}
            />
  }

  render() {
    return (
      <div className="Container">
        <UserInput key="child1" updateList={this.updateList} />
        <ItemFilters filterList={this.filterList}/>
        {this.renderList()}
      </div>
    );
  }
}

export default Container;