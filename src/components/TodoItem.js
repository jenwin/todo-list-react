import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { id, text, handleStrike } = this.props;

    return (
      <div className="todo-text-container">
        <div
          id={id}
          tabIndex="0"
          onClick={handleStrike}>
            {text}
        </div>
      </div>
    );
  }
}

export default TodoItem;