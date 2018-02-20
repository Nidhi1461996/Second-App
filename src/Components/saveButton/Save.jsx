import React, { Component } from 'react';
import './save.css';

class Save extends Component {
  render() {
    return (
      <div>
        <button
          className="save"
          onClick={() => {
            this.props.saveNote(this.props.editId);
          }}
        >
          <b>SAVE</b>
        </button>
      </div>
    );
  }
}

export default Save;
