import React, { Component } from 'react';

class GroupConfiguration extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.changeGrouping(event.target.value);
  }

  render() {
    return (
      <span className="configuration">
        Group by:
        <select name="grouping" value={this.props.grouping} onChange={this.handleChange}>
          <option value="-">-</option>
          <option value="name">Name</option>
          <option value="color">Color</option>
          <option value="date">Date</option>
          <option value="personInCharge">Person in Charge</option>
          <option value="completion">Completion</option>
        </select>
      </span>
    );
  }
}

export default GroupConfiguration;
