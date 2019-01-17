import React, { Component } from 'react';
import './NewFilter.css';

class NewFilter extends Component {
  constructor(props) {
    super(props);

    this.defaultValue = {
      name: '',
      color: '',
      date: '',
      personInCharge: '',
      completion: false
    }

    this.state = {
      name: {
        filtered: false,
        value: this.defaultValue.name
      },
      color: {
        filtered: false,
        value: this.defaultValue.color
      },
      date: {
        filtered: false,
        value: this.defaultValue.date
      },
      personInCharge: {
        filtered: false,
        value: this.defaultValue.personInCharge
      },
      completion: {
        filtered: false,
        value: this.defaultValue.completion
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(attributeName) {
    this.setState(state => ({
      [attributeName]: {
        filtered: !state[attributeName].filtered,
        value: this.defaultValue[attributeName]
      }
    }));
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: {
        filtered: true,
        value: target.type === 'checkbox' ? target.checked : target.value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var newFilter = {};
    Object.entries(this.state).forEach(attribute => {
      if (attribute[1].filtered) {
        newFilter[attribute[0]] = attribute[1].value;
      }
    });

    if (Object.keys(newFilter).length > 0) {
      this.props.addFilter(newFilter);
      this.props.hideNewFilterForm();
    }
  }

  render() {
    return (
      <form className="new-filter" onSubmit={this.handleSubmit}>
        <AttrInput name="name" {...this.state.name} onChange={this.handleChange} onToggle={this.handleToggle}>
          <input type="text" />
        </AttrInput>
        <AttrInput name="color" {...this.state.color} onChange={this.handleChange} onToggle={this.handleToggle}>
          <select>
            <option disabled hidden></option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </AttrInput>
        <AttrInput name="date" {...this.state.date} onChange={this.handleChange} onToggle={this.handleToggle}>
          <input type="text" />
        </AttrInput>
        <AttrInput name="personInCharge" {...this.state.personInCharge} onChange={this.handleChange} onToggle={this.handleToggle}>
          <input type="text" />
        </AttrInput>
        <AttrInput name="completion" {...this.state.completion} onChange={this.handleChange} onToggle={this.handleToggle}>
          <input type="checkbox" />
        </AttrInput>
        <button type="button" onClick={this.props.hideNewFilterForm}>×</button>
        <button>Add Filter</button>
      </form>
    );
  }
}

class AttrInput extends Component {
  render() {
    const disabled = !this.props.filtered;

    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      name: this.props.name,
      value: this.props.value,
      onChange: this.props.onChange,
      required: child.props.type !== 'checkbox',
      disabled
    }));

    return (
      <div>
        {children}
        <button type="button" onClick={() => this.props.onToggle(this.props.name)}>{disabled ? '+' : '×'}</button>
      </div>
    )
  }
}

export default NewFilter;
