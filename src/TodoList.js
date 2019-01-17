import React, { Component } from 'react';
import './TodoList.css';
import NewTodo from './NewTodo.js';

class TodoList extends Component {
  render() {
    const todoItems = this.props.todos.map(todo =>
      <li key={todo.id}>
        <div className={todo.color}>
          <b>{todo.completion ? <del>{todo.name}</del> : todo.name}</b>
          <button onClick={() => this.props.deleteTodo(todo.id)}>×</button>
        </div>
      </li>
    );

    return (
      <div>
        <NewTodo addTodo={this.props.addTodo} />
        <hr />
        <ol className="todo-list">
          {todoItems}
        </ol>
      </div>
    );
  }
}

export default TodoList;
