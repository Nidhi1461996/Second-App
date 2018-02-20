import React, { Component } from 'react';
import './savedNotes.css';

class SavedNotes extends Component {
  callEditNotes = () => {
    this.props.editNotes(this.props.content, this.props.id, this.props.title);
  }
  render() {
    return (
      <div>
        <div className="note-title">
          {this.props.title}
        </div>
        <div className="note-content" onClick={this.callEditNotes} >
          {/* <textarea readOnly value={this.props.content} className="note-content-textarea" /> */}
          {this.props.content}
        </div>
      </div >
    );
  }
}
export default SavedNotes;
