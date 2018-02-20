import React, { Component } from 'react';
import './body.css';
import SmallBox from '../noteTitle/NoteTitle';
import Bigbox from '../noteBody/NoteBody';
import Char from '../characterLength/CharacterLength';
import Save from '../saveButton/Save';

class MainBody extends Component {
  constructor() {
    super();
    this.state = {
      charLen: 150,
      currentTitle: '',
      currentBody: '',
    };
  }
  updateState = (val) => {
    this.setState({
      charLen: 150 - val,
    });
  }
  saveCurrentNote = (notes) => {
    this.setState({
      currentBody: notes,
    });
  }
  saveCurrentTitle = (title) => {
    this.setState({
      currentTitle: title,
    });
  }
  saveNote = (editId) => {
    const title = this.state.currentTitle;
    const note = this.state.currentBody;
    this.props.saveTheNotes(title, note, editId);
  }
  render() {
    return (
      <div className="main">
        <div className="body-row1">
          <p id="note"><b>{this.props.note}</b></p>
          <button>en</button>
        </div>
        <SmallBox
          saveTitle={() => this.saveCurrentTitle}
          editTitle={this.props.editTitle}
        />
        <p id="text"><i>{this.props.instruction}</i></p>
        <img src="../../notepad.png" alt="icon" />
        <Bigbox
          val={() => this.updateState}
          currNote={() => this.saveCurrentNote}
          editContent={this.props.editContent}
        />
        <Char val={this.state.charLen} />
        <Save
          saveNote={this.saveNote}
          editId={this.state.editId}
        />
      </div>
    );
  }
}
export default MainBody;
