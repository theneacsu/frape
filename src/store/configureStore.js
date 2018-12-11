import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import todosReducer from '../reducers/todos/todosReducer'
import todosFiltersReducer from '../reducers/todos/todosFiltersReducer'
import authReducer from '../reducers/authReducer'
import notesReducer from '../reducers/notes/notesReducer'
import notesFilterReducer from '../reducers/notes/notesFilterReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
      todosFilters: todosFiltersReducer,
      notes: notesReducer,
      notesFilters: notesFilterReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
