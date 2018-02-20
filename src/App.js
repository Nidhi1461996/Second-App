import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Heading from './Components/heading/Heading';
import Footer from './Components/footer/Footer';
import MainBody from './Components/body/Body';
import ViewNotes from './Components/viewNotes/ViewNotes';
import dispatchSaveAction from './redux/actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      editContent: '',
      editId: 0,
      pageId: 1,
      noteId: 1,
      // savedNotes: [],
      editFlag: 0,
    };
  }

  saveFromNotepad = (title, notes, editId) => {
    if (this.state.editFlag === 1) {
      const findindex = element => element.id === this.state.editId;
      const index = this.props.savedNotes.findIndex(findindex);
      this.props.savedNotes[index] = { id: editId, title: this.state.editTitle, notes };
      const editObject = this.props.savedNotes;
      this.setState({
        savedNotes: editObject,
        pageId: 0,
        editFlag: 0,
        title: this.props.savedNotes[index].title,
      });
    } else {
      //      const noteObject = this.props.savedNotes.concat([]);
      this.setState({
        pageId: 0,
      });
      this.props.dispatchSaveNote({ id: this.state.noteId, title, notes });
      // this.setState({
      //   savedNotes: noteObject,
      //   noteId: this.state.noteId + 1,
      //   pageId: 0,
      // });
    }
  }
  changeDisplay = () => {
    this.setState({
      pageId: 1,
    });
  }
  editNotes = (content, id, title) => {
    this.setState({
      editContent: content,
      editId: id,
      editFlag: 1,
      editTitle: title,
      pageId: 1,
    });
  }
  render() {
    if (this.state.pageId) {
      return (
        <div className="site">
          <Heading value="Start taking notes" />
          <MainBody
            note="Note Title"
            instruction="please type your note below"
            save="save"
            char="150 charatcters"
            saveTheNotes={this.saveFromNotepad}
            notes={this.props.savedNotes}
            editId={this.state.editId}
            editContent={this.state.editContent}
            editTitle={this.state.title}

          />
          <Footer value="About" />
        </div>
      );
    }
    return (
      <div className="site">
        <Heading value="Start taking notes" />
        <ViewNotes
          notes={this.props.savedNotes}
          changePage={this.changeDisplay}
          editNotes={this.editNotes}
        />
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  savedNotes: state.savedNotes,
});

const mapDispatchToProps = dispatch => ({
  dispatchSaveNote: noteData => dispatch(dispatchSaveAction(noteData)),
});


export default connect(mapStatesToProps, mapDispatchToProps)(App);
