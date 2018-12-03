import { createStore, combineReducers } from 'redux'
import todosReducer from '../reducers/todos/todosReducer'
import todosFiltersReducer from '../reducers/todos/todosFiltersReducer'

export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
      todosFilters: todosFiltersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
