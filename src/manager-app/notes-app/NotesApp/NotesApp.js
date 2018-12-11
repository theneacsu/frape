import React from 'react'
import NotesList from '../components/NotesList/NotesList'

const NotesApp = props => (
  <div>
    <button onClick={() => props.history.push('/notes/create')}>
      New Note
    </button>
    <NotesList />
  </div>
)

export default NotesApp
