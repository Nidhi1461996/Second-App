import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../Components/footer/Footer';
import './viewNotes.css';
import '../../Components/footer/footer.css';
import SavedNotes from '../savedNotes/SavedNotes';

class ViewNotes extends React.Component {
  render() {
    const notesElements = this.props.notes
      .map(note => (<SavedNotes
        editNotes={this.props.editNotes}
        key={note.id}
        title={note.title}
        content={note.notes}
        id={note.id}
      />));
    return (

      <div className="main">
        <div className="noted-display-body-row" >
          {notesElements}
        </div>
        <div className="note-display-bottom-row">
          <center><button className="page-button" onClick={() => this.props.changePage()}> Create New Note</button></center>
        </div>
        <Footer value="About" />
      </div>

    );
  }
}

ViewNotes.defaultProps = {
  notes: [],
  changePage: () => { },
  editMode: () => { },
};

ViewNotes.propTypes = {
  notes: PropTypes.arrayOf(Object),
  changePage: PropTypes.func,
  editMode: PropTypes.func,
};

export default ViewNotes;
