import React, { Component } from 'react';
import NewFilter from './NewFilter.js';
import FilterList from './FilterList.js';

class FilterConfiguration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false
    };

    this.showNewFilterForm = this.showNewFilterForm.bind(this);
    this.hideNewFilterForm = this.hideNewFilterForm.bind(this);
  }

  showNewFilterForm() {
    this.setState({
      adding: true
    });
  }

  hideNewFilterForm() {
    this.setState({
      adding: false
    });
  }

  render() {
    return (
      <span className="configuration">
        Filter by:
        <FilterList filters={this.props.filters} deleteFilter={this.props.deleteFilter} />
        {this.state.adding ? <NewFilter addFilter={this.props.addFilter} hideNewFilterForm={this.hideNewFilterForm} /> : <button onClick={this.showNewFilterForm}>+</button>}
      </span>
    );
  }
}

export default FilterConfiguration;
