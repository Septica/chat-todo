import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      color: '',
      date: '',
      personInCharge: '',
      completion: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(Object.assign({}, this.state));
  }

  render() {
    return (
      <form className="new-todo" onSubmit={this.handleSubmit}>
        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} required />
        <select name="color" value={this.state.color} onChange={this.handleChange} required>
          <option disabled hidden></option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
        </select>
        <input name="date" type="date" value={this.state.date} onChange={this.handleChange} required />
        <input name="personInCharge" type="text" value={this.state.personInCharge} onChange={this.handleChange} required />
        <input name="completion" type="checkbox" value={this.state.completion} onChange={this.handleChange} />
        <button>+</button>
      </form>
    );
  }
}

export default TodoList;
