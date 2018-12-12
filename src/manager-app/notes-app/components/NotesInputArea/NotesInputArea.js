import React from 'react'
import { connect } from 'react-redux'
import '../NotesForm/NotesForm'
import NotesForm from '../NotesForm/NotesForm'
import { startAddNote } from '../../../../actions/notes-app/notes'
import styles from './NotesInputArea.module.css'

const NotesInputArea = props => (
  <div className={styles.div}>
    <NotesForm
      purpose="add"
      titlePlaceholder="ex: Eat healthier"
      bodyPlaceholder="ex: Remove an unhealthy product evey month"
      onSubmit={note => {
        props.startAddNote(note)
        props.history.push('/notes')
      }}
    />
  </div>
)

const mapDispatchToProps = dispatch => ({
  startAddNote: note => dispatch(startAddNote(note))
})

export default connect(
  undefined,
  mapDispatchToProps
)(NotesInputArea)
