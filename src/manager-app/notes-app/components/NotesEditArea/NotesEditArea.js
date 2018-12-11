import React from 'react'
import { connect } from 'react-redux'
import NotesForm from '../NotesForm/NotesForm'
import { editNote, removeNote } from '../../../../actions/notes-app/notes'

const NotesEditArea = props => (
  <div>
    <NotesForm
      purpose="edit"
      note={props.note}
      onSubmit={note => {
        props.editNote(props.note.id, note)
        props.history.push('/notes')
      }}
      onRemove={() => {
        props.removeNote(props.note.id)
        props.history.push('/notes')
      }}
    />
  </div>
)

const mapStateToProps = (state, props) => ({
  note: state.notes.find(note => note.id === props.match.params.id)
})

const mapDispatchToProps = dispatch => ({
  editNote: (id, updates) => dispatch(editNote(id, updates)),
  removeNote: id => dispatch(removeNote(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesEditArea)
