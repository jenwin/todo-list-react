import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <p
          className="todo-title"
          ariaLabel="title"
          tabIndex="0">
            my todos
        </p>
      </div>
    );
  }
}

export default Header;