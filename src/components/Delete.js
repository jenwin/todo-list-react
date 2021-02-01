import React, { Component } from 'react';

class Delete extends Component {
  render() {
    const { id, deleteTodo } = this.props;

    return (
      <div className="delete-container">
        <button
          className="delete-btn"
          onClick={() => deleteTodo(id)}>
            <i className='fas fa-trash-alt'></i>
          </button>
      </div>
    );
  }
}

export default Delete;