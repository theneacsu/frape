import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { database } from '../../../firebase/firebase'
import todos from '../../fixtures/todo-app/todos'
import {
  addTodo,
  editTodo,
  removeTodo,
  toggleTodo,
  startAddTodo,
  startRemoveTodo,
  startToggleTodo,
  startEditTodo
} from '../../../actions/todo-app/todos'

const createMockStore = configureMockStore([thunk])
const uid = '6969'
const email = 'test@gmail.com'
const defaultAuthState = { auth: { uid, email } }

let id

beforeEach(done => {
  id = '123abc'

  const todoData = {}
  todos.forEach(todo => {
    todoData[todo.id] = {
      text: todo.text,
      completed: todo.completed
    }
  })

  database
    .ref(`users/${uid}/todos`)
    .set(todoData)
    .then(() => {
      return database.ref(`users/${uid}/email`).set(email)
    })
    .then(() => done())
})

test('Should return the action object for adding a todo', () => {
  const todo = {
    text: 'Yoga session',
    id: '123abc',
    completed: false
  }
  const action = addTodo(todo)
  expect(action).toEqual({
    type: 'ADD_TODO',
    todo
  })
})

test('Should return the action object for editing a todo', () => {
  const updates = {
    text: 'Meditate',
    completed: true
  }
  const action = editTodo(id, updates)
  expect(action).toEqual({
    type: 'EDIT_TODO',
    id,
    updates
  })
})

test('Should return the action object for removing a todo', () => {
  const action = removeTodo(id)
  expect(action).toEqual({
    type: 'REMOVE_TODO',
    id
  })
})

test('Should return the action object for toggle a todo status', () => {
  const action = toggleTodo(id)
  expect(action).toEqual({
    type: 'TOGGLE_TODO',
    id
  })
})

test('Should add a todo to database', done => {
  const store = createMockStore(defaultAuthState)

  const todoText = 'Eat some mandarines'

  let todoId

  store
    .dispatch(startAddTodo(todoText))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_TODO',
        todo: {
          text: todoText,
          completed: false,
          id: expect.any(String)
        }
      })

      todoId = actions[0].todo.id

      return database.ref(`users/${uid}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val().email).toBe(email)
      expect(snapshot.val().todos[todoId]).toEqual({
        text: todoText,
        completed: false
      })
      done()
    })
})

test('Should remove a todo from database', done => {
  const store = createMockStore(defaultAuthState)

  store
    .dispatch(startRemoveTodo('2'))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'REMOVE_TODO',
        id: '2'
      })

      return database.ref(`users/${uid}/todos/2`).once('value')
    })
    .then(snapshot => {
      expect(!!snapshot.val()).toBe(false)
      done()
    })
})

test('Should toggle a todo from database', done => {
  const store = createMockStore(defaultAuthState)

  store
    .dispatch(startToggleTodo('1'))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'TOGGLE_TODO',
        id: '1'
      })

      return database.ref(`users/${uid}/todos/1`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val().completed).toBe(true)
      done()
    })
})

test('Should edit a todo from database', done => {
  const store = createMockStore(defaultAuthState)
  const text = 'Go for a nice walk'

  store
    .dispatch(startEditTodo('3', { text }))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'EDIT_TODO',
        id: '3',
        updates: {
          text
        }
      })

      return database.ref(`users/${uid}/todos/3`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val().text).toBe(text)
      done()
    })
})
