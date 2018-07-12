import React, { Component } from 'react';

class  ItemFilters extends Component {

  activeTasks = (active) => {
    this.props.filterList(active);
  }

  doneTasks = (done) => {
    this.props.filterList(done);
  }

  allTasks = (all) => {
    this.props.filterList(all);
  }

  render() {
    return (
      <div className="ItemFilters">
        <button type="submit" value="Submit" onClick={() => this.allTasks('all')}>All</button>
        <button type="submit" value="Submit" onClick={() => this.activeTasks('active')}>Active</button>
        <button type="submit" value="Submit" onClick={() => this.doneTasks('done')}>Done</button>
      </div>
    );
  }
}

export default ItemFilters;