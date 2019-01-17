import React, { Component } from 'react';

class OrderConfiguration extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.changeOrdering(event.target.value);
  }

  render() {
    return (
      <span className="configuration">
        Order by:
        <select name="ordering" value={this.props.ordering} onChange={this.handleChange}>
          <option value="id">ID</option>
          <option value="date">Date</option>
        </select>
      </span>
    );
  }
}

export default OrderConfiguration;
