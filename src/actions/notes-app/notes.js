import uuid from 'uuid/v4'

const addNote = ({ title, body = '' }) => ({
  type: 'ADD_NOTE',
  note: {
    title,
    body,
    id: uuid()
  }
})

const removeNote = id => ({
  type: 'REMOVE_NOTE',
  id
})

const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
})

export { addNote, removeNote, editNote }
