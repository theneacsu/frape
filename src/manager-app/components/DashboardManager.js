import React from 'react'
import { connect } from 'react-redux'
import getVisibleTodos from '../../selectors/todo-app/todos'

export const DashboardManager = props => (
  <div>
    <h1>Welcome, {props.userInfo.displayName}</h1>
    <img src={props.userInfo.photoURL} alt="User profile phote" />
    <p>You have {props.todosLeft} todo(s) left.</p>
  </div>
)

const mapStateToProps = state => ({
  userInfo: state.auth,
  todosLeft: getVisibleTodos(state.todos, state.todosFilters).filter(
    todo => !todo.completed
  ).length
})

export default connect(mapStateToProps)(DashboardManager)
