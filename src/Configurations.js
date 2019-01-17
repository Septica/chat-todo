import React, { Component } from 'react';
import './Configurations.css';
import FilterConfiguration from './FilterConfiguration';
import GroupConfiguration from './GroupConfiguration';
import OrderConfiguration from './OrderConfiguration';

class Configurations extends Component {
  render() {
    return (
      <div className="configurations">
        <FilterConfiguration filters={this.props.filters} addFilter={this.props.addFilter} deleteFilter={this.props.deleteFilter} />
        <GroupConfiguration grouping={this.props.grouping} changeGrouping={this.props.changeGrouping} />
        <OrderConfiguration ordering={this.props.ordering} changeOrdering={this.props.changeOrdering} />
      </div>
    );
  }
}

export default Configurations;
