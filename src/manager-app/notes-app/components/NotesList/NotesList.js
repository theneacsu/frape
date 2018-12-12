import React from 'react'
import { connect } from 'react-redux'
import NotesListItem from '../NotesListItem/NotesListItem'
import { getVisibleNotes } from '../../../../selectors/notes-app/notes'
import styles from './NotesList.module.css'

const NotesList = props => (
  <div className={styles.div}>
    {props.notes.length === 0 ? (
      <p>No notes. Get started by creating one.</p>
    ) : (
      props.notes.map(note => <NotesListItem key={note.id} {...note} />)
    )}
  </div>
)

const mapStateToProps = state => ({
  notes: getVisibleNotes(state.notes, state.notesFilters)
})

export default connect(mapStateToProps)(NotesList)
