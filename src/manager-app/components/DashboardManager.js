import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getVisibleTodos from '../../selectors/todo-app/todos'

export const DashboardManager = props => (
  <div className="dashboard-box">
    <h1>{props.userInfo.displayName}</h1>
    <img src={props.userInfo.photoURL} alt="User profile phote" />
    <p>
      You have <Link to="/todos">{props.todosLeft} todo(s)</Link> left.
    </p>
  </div>
)

const mapStateToProps = state => ({
  userInfo: state.auth,
  todosLeft: getVisibleTodos(state.todos, state.todosFilters).filter(
    todo => !todo.completed
  ).length
})

export default connect(mapStateToProps)(DashboardManager)
