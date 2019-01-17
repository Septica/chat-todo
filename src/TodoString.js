import React, { Component } from 'react';
import './TodoString.css';

class TodoString extends Component {
  constructor(props) {
    super(props);

    this.emojiMap = {
      color: color => ({
        red: '❤️',
        blue: '💙',
        green: '💚',
        yellow: '💛',
        purple: '💜',
        orange: '🧡',
        black: '🖤'
      })[color],
      completion: completion => ({
        [true]: '✔️',
        [false]: '🚧'
      })[completion],
      name: () => '📝',
      personInCharge: () => '🧑',
      date: () => '📅'
    };
  }

  getTodoString(todo, indentationLevel = 0) {
    const emojiMap = this.emojiMap;

    var string = ' '.repeat(2 * indentationLevel) + `${emojiMap.color(todo.color)} *${todo.name}* ${emojiMap.completion(todo.completion)}\n`;

    indentationLevel++;
    var indentation = ' '.repeat(2 * indentationLevel);
    string += indentation + `${emojiMap.personInCharge()} ${todo.personInCharge}\n`;
    string += indentation + `${emojiMap.date()} ${todo.date}\n`;

    return string;
  }

  render() {
    const todos = this.props.todos;
    const grouping = this.props.grouping;

    var string = '';

    if (grouping !== '-') {
      const getIndentedTodoString = todo => string += this.getTodoString(todo, 1);
      Object.entries(todos).forEach(group => {
        string += `[${this.emojiMap[grouping](group[0])} Group ${group[0]}]\n`;
        group[1].forEach(getIndentedTodoString);
        string += '\n';
      })
    } else {
      todos.forEach(todo => string += this.getTodoString(todo));
    }

    return (
      <textarea className="todo-string" value={string} readOnly />
    );
  }
}

export default TodoString;
