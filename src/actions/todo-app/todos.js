import { database } from '../../firebase/firebase'

const setTodos = todos => ({
  type: 'SET_TODOS',
  todos
})

const startSetTodos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const todos = []
    return database
      .ref(`users/${uid}/todos`)
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          todos.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
      })
      .then(() => dispatch(setTodos(todos)))
  }
}

const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
})

const startAddTodo = text => {
  return (dispatch, getState) => {
    const todo = {
      text,
      completed: false
    }
    const uid = getState().auth.uid
    return database
      .ref(`users/${uid}/todos`)
      .push(todo)
      .then(ref => {
        dispatch(
          addTodo({
            ...todo,
            id: ref.key
          })
        )
        return database
          .ref(`users/${uid}/email`)
          .set(`${getState().auth.email}`)
      })
  }
}

const editTodo = (id, updates) => ({
  type: 'EDIT_TODO',
  id,
  updates
})

const startEditTodo = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid

    return database
      .ref(`users/${uid}/todos/${id}/text`)
      .set(updates.text)
      .then(() => dispatch(editTodo(id, updates)))
  }
}

const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

const startRemoveTodo = id => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database
      .ref(`users/${uid}/todos/${id}`)
      .remove()
      .then(() => dispatch(removeTodo(id)))
  }
}

const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

const startToggleTodo = id => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    let completed = database
      .ref(`users`)
      .child(uid)
      .child(`todos`)
      .child(id)
      .child(`completed`)
    return completed
      .transaction(comp => {
        comp = !comp
        return comp
      })
      .then(() => dispatch(toggleTodo(id)))
  }
}

export {
  addTodo,
  editTodo,
  removeTodo,
  toggleTodo,
  setTodos,
  startAddTodo,
  startRemoveTodo,
  startToggleTodo,
  startEditTodo,
  startSetTodos
}
