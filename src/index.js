import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import ManagerApp from './manager-app/ManagerApp/ManagerApp'
import configureStore from './store/configureStore'
import { firebase } from './firebase/firebase'
import { history } from './router/AppRouter'
import { login, logout } from './actions/auth/auth'
import { startSetTodos } from './actions/todo-app/todos'
import { startSetNotes } from './actions/notes-app/notes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import Loading from './manager-app/components/Loading/Loading'
import 'normalize.css/normalize.css'

library.add(faTrashAlt, faPencilAlt)

const store = configureStore()

const app = (
  <Provider store={store}>
    <ManagerApp />
  </Provider>
)

let hasRendered = false

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById('root'))
    hasRendered = true
  }
}

ReactDOM.render(<Loading />, document.getElementById('root'))

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user))
    store.dispatch(startSetNotes())
    store.dispatch(startSetTodos()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
