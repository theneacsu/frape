import { database } from '../../firebase/firebase'

const addNote = ({ title, body = '', id }) => ({
  type: 'ADD_NOTE',
  note: {
    title,
    body,
    id
  }
})

const startAddNote = ({ title, body = '' }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const note = { title, body }
    return database
      .ref(`users/${uid}/notes`)
      .push(note)
      .then(ref => dispatch(addNote({ ...note, id: ref.key })))
  }
}

const removeNote = id => ({
  type: 'REMOVE_NOTE',
  id
})

const startRemoveNote = id => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database
      .ref(`users/${uid}/notes/${id}`)
      .remove()
      .then(() => dispatch(removeNote(id)))
  }
}

const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
})

const startEditNote = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database
      .ref(`users/${uid}/notes/${id}`)
      .update(updates)
      .then(() => dispatch(editNote(id, updates)))
  }
}

const setNotes = notes => ({
  type: 'SET_NOTES',
  notes
})

const startSetNotes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database
      .ref(`users/${uid}/notes`)
      .once('value')
      .then(snapshot => {
        const notes = []
        for (let snap in snapshot.val()) {
          notes.push({
            title: snapshot.val()[snap].title,
            body: snapshot.val()[snap].body,
            id: snap
          })
        }
        return notes
      })
      .then(notes => dispatch(setNotes(notes)))
  }
}

export {
  addNote,
  removeNote,
  editNote,
  setNotes,
  startAddNote,
  startRemoveNote,
  startEditNote,
  startSetNotes
}
