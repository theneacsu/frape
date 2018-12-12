import React from 'react'
import NotesList from '../components/NotesList/NotesList'
import NotesSearchArea from '../components/NotesSearchArea/NotesSearchArea'
import styles from './NotesApp.module.css'

const NotesApp = props => (
  <div className={styles.wrapperDiv}>
    <div className="container">
      <div className={styles.div}>
        <button
          className={styles.button}
          onClick={() => props.history.push('/notes/create')}
        >
          New Note
        </button>

        <NotesSearchArea />
      </div>
      <NotesList />
    </div>
  </div>
)

export default NotesApp
