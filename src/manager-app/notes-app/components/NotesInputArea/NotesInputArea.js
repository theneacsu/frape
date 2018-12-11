import React from 'react'
import { connect } from 'react-redux'
import '../NotesForm/NotesForm'
import NotesForm from '../NotesForm/NotesForm'
import { addNote } from '../../../../actions/notes-app/notes'

const NotesInputArea = props => (
  <div>
    <NotesForm
      purpose="add"
      onSubmit={note => {
        props.addNote(note)
        props.history.push('/notes')
      }}
    />
  </div>
)

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note))
})

export default connect(
  undefined,
  mapDispatchToProps
)(NotesInputArea)
