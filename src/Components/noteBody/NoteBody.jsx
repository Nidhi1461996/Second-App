import React, { Component } from 'react';
import propTypes from 'prop-types'; // ES6
import './noteBody.css';


class NoteBody extends Component {
  constructor() {
    super();
    this.state = {
      class: 'black',
      maxLen: 150,
      content: '',
    };
  }
  countChar(str) {
    const textLength = str.value.length;
    this.props.val()(textLength);
    this.props.currNote()(str.value);
    if (textLength > 10) {
      this.setState({
        class: 'red',
      });
    } else {
      this.setState({
        class: 'black',
      });
    }
  }
  currentContent = (content) => {
    this.setState({
      content,
    });
  }
  render() {
    return (
      <div>
        <center>
          <textarea
            maxLength={this.state.maxLen}
            className={this.state.class}
            onInput={e => this.countChar(e.target)}
          >{this.props.editContent}
          </textarea>
        </center>

      </div>
    );
  }
}

NoteBody.defaultProps = {
  val: 0,
  currNote: '',
};

NoteBody.propTypes = {
  val: propTypes.func,
  currNote: propTypes.func,
};

export default NoteBody;
