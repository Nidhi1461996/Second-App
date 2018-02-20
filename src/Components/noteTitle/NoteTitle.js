import React, { Component } from 'react';
import propTypes from 'prop-types'; // ES6
import './noteTitle.css';

class NoteTitle extends Component {
  save(title) {
    this.props.saveTitle()(title);
  }

  render() {
    return (
      <div>
        <center>
          <textarea
            className="textarea"
            onInput={e => this.save(e.target.value)}
          >{this.props.editTitile}
          </textarea>
        </center>
      </div>
    );
  }
}
NoteTitle.defaultProps = {
  saveTitle: '',
};

NoteTitle.propTypes = {
  saveTitle: propTypes.func,
};

export default NoteTitle;
