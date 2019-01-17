import React, { Component } from 'react';
import './TodoApp.css';
import Configurations from './Configurations.js';
import TodoList from './TodoList.js';
import TodoString from './TodoString.js';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      nextTodoId: 0,
      filters: [],
      nextFilterId: 0,
      grouping: '-',
      ordering: 'id'
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.deleteFilter = this.deleteFilter.bind(this);
    this.changeGrouping = this.changeGrouping.bind(this);
    this.changeOrdering = this.changeOrdering.bind(this);
  }

  addTodo(todo) {
    this.setState(state => {
      const nextTodoId = state.nextTodoId;

      todo.id = nextTodoId;

      return {
        todos: [
          ...state.todos,
          todo
        ],
        nextTodoId: nextTodoId + 1
      };
    });
  }

  deleteTodo(id) {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  }

  addFilter(attributes) {
    this.setState(state => {
      const nextFilterId = state.nextFilterId;

      return {
        filters: [
          ...state.filters,
          {
            id: nextFilterId,
            attributes
          }
        ],
        nextFilterId: nextFilterId + 1
      };
    });
  }

  deleteFilter(id) {
    this.setState(state => ({
      filters: state.filters.filter(filter => filter.id !== id)
    }));
  }

  changeGrouping(grouping) {
    this.setState({ grouping });
  }

  changeOrdering(ordering) {
    this.setState({ ordering });
  }

  groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  render() {
    const filters = this.state.filters;
    const grouping = this.state.grouping;
    const ordering = this.state.ordering;

    var todos = this.state.todos;

    if (filters.length > 0) todos = todos.filter(todo => filters.some(filter => Object.entries(filter.attributes).every(attr => attr[1] === todo[attr[0]])));

    todos.sort(function (a, b) {
      const attrA = a[ordering];
      const attrB = b[ordering];

      if (attrA < attrB) return -1;
      if (attrA > attrB) return 1;
      return 0;
    });

    return (
      <main className="todo-app">
        <Configurations
          filters={this.state.filters}
          addFilter={this.addFilter}
          deleteFilter={this.deleteFilter}
          grouping={grouping}
          changeGrouping={this.changeGrouping}
          ordering={ordering}
          changeOrdering={this.changeOrdering}
        />
        <TodoList
          todos={todos}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoString
          grouping={grouping}
          todos={grouping !== '-' ? this.groupBy(todos, grouping) : todos}
        />
      </main>
    );
  }
}

export default TodoApp;
