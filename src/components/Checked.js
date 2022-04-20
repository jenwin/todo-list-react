import React, { Component } from 'react';

class Checked extends Component {
  render() {
    const { id, text, handleCheck } = this.props;

    return (
      <div>
        <input
          name="checked"
          type="checkbox"
          onChange={() => handleCheck({ id, text })}
        />
      </div>
    );
  }
}

export default Checked;