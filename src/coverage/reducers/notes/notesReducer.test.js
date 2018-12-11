import notesReducer from '../../../reducers/notes/notesReducer'
import notes from '../../fixtures/notes-app/notes'

test('Should set up correctly the inital state', () => {
  const action = {
    type: '@@INIT'
  }
  const state = notesReducer(undefined, action)
  expect(state).toEqual([])
})

test('Should add a note', () => {
  const action = {
    type: 'ADD_NOTE',
    note: {
      title: 'Cinnamon',
      body: 'Spices are good for you',
      id: '123abv'
    }
  }
  const state = notesReducer(notes, action)
  expect(state).toEqual([...notes, action.note])
})

test('Should remove a note when the id is valid', () => {
  const action = {
    type: 'REMOVE_NOTE',
    id: '2'
  }
  const state = notesReducer(notes, action)
  expect(state).toEqual([notes[0], notes[2]])
})

test('Should note remove a note when the id is not valid', () => {
  const action = {
    type: 'REMOVE_NOTE',
    id: '2asd'
  }
  const state = notesReducer(notes, action)
  expect(state).toEqual(notes)
})

test('Should edit a note when the id is valid', () => {
  const action = {
    type: 'EDIT_NOTE',
    id: '1',
    updates: {
      title: 'Some random title',
      body: 'Some random body'
    }
  }
  const state = notesReducer(notes, action)
  expect(state).toEqual([
    {
      title: action.updates.title,
      body: action.updates.body,
      id: '1'
    },
    notes[1],
    notes[2]
  ])
})

test('Should not edit a note when the id is not valid', () => {
  const action = {
    type: 'EDIT_NOTE',
    id: '1123sda',
    updates: {
      title: 'Some random title',
      body: 'Some random body'
    }
  }
  const state = notesReducer(notes, action)
  expect(state).toEqual(notes)
})
