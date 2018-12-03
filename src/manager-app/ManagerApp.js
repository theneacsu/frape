import React from 'react'
import TodoApp from './todo-app/TodoApp'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

const store = configureStore()

const ManagerApp = () => (
  <div>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </div>
)

export default ManagerApp
