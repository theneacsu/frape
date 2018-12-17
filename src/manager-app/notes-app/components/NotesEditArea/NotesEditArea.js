import React from 'react'
import { connect } from 'react-redux'
import NotesForm from '../NotesForm/NotesForm'
import {
  startEditNote,
  startRemoveNote
} from '../../../../actions/notes-app/notes'
import styles from './NotesEditArea.module.css'

export const NotesEditArea = props => (
  <div className={styles.div}>
    <NotesForm
      purpose="edit"
      note={props.note}
      onSubmit={note => {
        props.startEditNote(props.note.id, note)
        props.history.push('/notes')
      }}
      onRemove={() => {
        props.startRemoveNote(props.note.id)
        props.history.push('/notes')
      }}
    />
  </div>
)

const mapStateToProps = (state, props) => ({
  note: state.notes.find(note => note.id === props.match.params.id)
})

const mapDispatchToProps = dispatch => ({
  startEditNote: (id, updates) => dispatch(startEditNote(id, updates)),
  startRemoveNote: id => dispatch(startRemoveNote(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesEditArea)
