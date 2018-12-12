import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { database } from '../../../firebase/firebase'
import {
  addNote,
  editNote,
  removeNote,
  setNotes,
  startAddNote,
  startRemoveNote,
  startEditNote,
  startSetNotes
} from '../../../actions/notes-app/notes'
import notes from '../../fixtures/notes-app/notes'

const createMockStore = configureMockStore([thunk])
const uid = '6969'
const email = 'test@gmail.com'
const defaultAuthState = { auth: { uid, email } }

beforeEach(done => {
  const notesData = {}
  notes.forEach(
    note => (notesData[note.id] = { body: note.body, title: note.title })
  )
  database
    .ref(`users/${uid}/notes`)
    .set(notesData)
    .then(() => done())
})

test('Should create the action object for adding a note', () => {
  const note = {
    title: 'Coffee',
    body: 'But some coffee',
    id: '3'
  }
  const action = addNote(note)
  expect(action).toEqual({
    type: 'ADD_NOTE',
    note: {
      ...note
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

test('Should create the action object for setting the notes', () => {
  const notes = [{ title: 'abc', body: 'def', id: '2' }]
  const action = setNotes(notes)
  expect(action).toEqual({
    type: 'SET_NOTES',
    notes
  })
})

test('Should add a note to database', done => {
  const store = createMockStore(defaultAuthState)
  const note = { title: 'Green Tea', body: 'rocks' }

  store
    .dispatch(startAddNote(note))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_NOTE',
        note: {
          ...note,
          id: expect.any(String)
        }
      })
      const noteId = actions[0].note.id
      return database.ref(`users/${uid}/notes/${noteId}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val().title).toBe(note.title)
      expect(snapshot.val().body).toBe(note.body)
      done()
    })
})

test('Should remove a note from database', done => {
  const store = createMockStore(defaultAuthState)
  const id = '3'

  store
    .dispatch(startRemoveNote(id))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'REMOVE_NOTE',
        id
      })

      return database.ref(`users/${uid}/notes/id`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy()
      done()
    })
})

test('Should edit a note from database', done => {
  const store = createMockStore(defaultAuthState)
  const id = '1'
  const updates = {
    title: 'gg',
    body: 'i am'
  }

  store
    .dispatch(startEditNote(id, updates))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'EDIT_NOTE',
        id,
        updates
      })

      return database.ref(`users/${uid}/notes/${id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val().title).toBe(updates.title)
      expect(snapshot.val().body).toBe(updates.body)
      done()
    })
})

test('Should get all notes from database', done => {
  const store = createMockStore(defaultAuthState)

  store
    .dispatch(startSetNotes())
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'SET_NOTES',
        notes
      })

      return database.ref(`users/${uid}/notes`).once('value')
    })
    .then(snapshot => {
      const notesSnap = []
      for (let snap in snapshot.val()) {
        notesSnap.push({
          id: snap,
          title: snapshot.val()[snap].title,
          body: snapshot.val()[snap].body
        })
      }
      expect(notesSnap).toEqual(notes)
      done()
    })
})
