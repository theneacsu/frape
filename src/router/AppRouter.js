import React from 'react'
import { Router, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import LoginPage from '../manager-app/components/LoginPage'
import DashboardManager from '../manager-app/components/DashboardManager'
import TodoApp from '../manager-app/todo-app/TodoApp'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact />
      <PrivateRoute path="/dashboard" component={DashboardManager} />
      <PrivateRoute path="/todos" component={TodoApp} />
    </Switch>
  </Router>
)

export default AppRouter
