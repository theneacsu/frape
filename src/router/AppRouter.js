import React from 'react'
import { Router, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import PublicRoute from './PublicRoute/PublicRoute'
import Login from '../manager-app/components/Login/Login'
import Dashboard from '../manager-app/components/Dashboard/Dashboard'
import TodoApp from '../manager-app/todo-app/TodoApp/TodoApp'
import NotesApp from '../manager-app/notes-app/NotesApp/NotesApp'
import NotesInputArea from '../manager-app/notes-app/components/NotesInputArea/NotesInputArea'
import NotesEditArea from '../manager-app/notes-app/components/NotesEditArea/NotesEditArea'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={Login} exact />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/todos" component={TodoApp} />
      <PrivateRoute path="/notes" component={NotesApp} exact />
      <PrivateRoute path="/notes/create" component={NotesInputArea} />
      <PrivateRoute path="/notes/:id" component={NotesEditArea} />
    </Switch>
  </Router>
)

export default AppRouter
