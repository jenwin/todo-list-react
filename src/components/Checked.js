import React, { Component } from 'react';

class Checked extends Component {
  render() {
    const { id, todo, handleCheck } = this.props;

    return (
      <div>
        <input
          name="checked"
          type="checkbox"
          onChange={() => handleCheck({ id, todo })}
        />
      </div>
    );
  }
}

export default Checked;