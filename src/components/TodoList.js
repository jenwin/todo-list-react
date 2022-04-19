import React, { Component } from 'react';
import Delete from './Delete';
import Checked from './Checked';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { items, deleteTodo, handleStrike, handleCheck } = this.props;

    return (
      <div className="add-container">
        <ul className="list">
          {items.map(i => (
            <li
              className="list-item"
              key={i.id}>
                <Checked
                  id={i.id}
                  todo={i.todo}
                  handleCheck={(handleCheck)}
                />
                <TodoItem
                  id={i.id}
                  todo={i.todo}
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