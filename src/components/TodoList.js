import React, { Component } from 'react';
import Delete from './Delete';
import Checked from './Checked';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { items, deleteTodo, handleStrike, handleCheck } = this.props;
    console.log(items)

    return (
      <div className="add-container">
        <ul className="list">
          {items.map(i => (
            <li
              className="list-item"
              key={i.id}>
                <Checked
                  id={i.id}
                  text={i.text}
                  handleCheck={(handleCheck)}
                />
                <TodoItem
                  id={i.id}
                  text={i.text}
                  className="todo"
                  handleStrike={handleStrike}
                />
                <br />
                <br />
                <Delete
                  id={i.id}
                  deleteTodo={deleteTodo}
                />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;