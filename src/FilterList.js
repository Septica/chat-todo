import React, { Component } from 'react';
import './FilterList.css';

class FilterList extends Component {
  render() {
    const filters = this.props.filters.map(filter => <Filter key={filter.id} filter={filter} deleteFilter={() => this.props.deleteFilter(filter.id)} />);

    return (
      <ul className="filters">
        {filters}
      </ul>
    );
  }
}

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const filter = this.props.filter;
    const filterItems = Object.entries(filter.attributes).map((attr, index) => <p key={index}>{attr[0]}: {attr[1]}</p>);

    return (
      <li onClick={this.handleClick}>
        {this.state.isToggleOn ? filterItems : "..."}
        <button onClick={this.props.deleteFilter}>×</button>
      </li>
    );
  }
}

export default FilterList;
