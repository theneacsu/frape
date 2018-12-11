import React from 'react'
import { connect } from 'react-redux'
import NotesListItem from '../NotesListItem/NotesListItem'

const NotesList = props => (
  <div>
    {props.notes.length === 0 ? (
      <p>No notes. Get started by creating one.</p>
    ) : (
      props.notes.map(note => <NotesListItem key={note.id} {...note} />)
    )}
  </div>
)

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps)(NotesList)
