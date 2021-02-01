import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { id, todo, handleStrike } = this.props;

    return (
      <div className="todo-text-container">
        <div
          id={id}
          onClick={handleStrike}>
            {todo}
        </div>
      </div>
    );
  }
}

export default TodoItem;