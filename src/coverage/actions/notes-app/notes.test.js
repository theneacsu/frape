import { addNote, editNote, removeNote } from '../../../actions/notes-app/notes'

test('Should create the action object for adding a note', () => {
  const note = {
    title: 'Coffee',
    body: 'But some coffee'
  }
  const action = addNote(note)
  expect(action).toEqual({
    type: 'ADD_NOTE',
    note: {
      ...note,
      id: expect.any(String)
    }
  })
})

test('Should create the action object for removing a note', () => {
  const id = '123abc'
  const action = removeNote(id)
  expect(action).toEqual({
    type: 'REMOVE_NOTE',
    id
  })
})

test('Should create the action object for editing a note', () => {
  const id = '123abc'
  const updates = {
    title: 'tea',
    body: 'drink some tea'
  }
  const action = editNote(id, updates)
  expect(action).toEqual({
    type: 'EDIT_NOTE',
    id,
    updates
  })
})
