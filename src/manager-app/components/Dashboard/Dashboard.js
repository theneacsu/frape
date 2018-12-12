import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getVisibleTodos from '../../../selectors/todo-app/todos'
import styles from './Dashboard.module.css'

export const Dashboard = props => (
  <div className={styles.div}>
    <h1 className={styles.h1}>{props.userInfo.displayName}</h1>
    <img
      src={props.userInfo.photoURL}
      alt="User profile phote"
      className={styles.img}
    />
    <p className={styles.p}>
      You have{' '}
      <Link to="/todos" className={styles.a}>
        {props.todosLeft} todo(s)
      </Link>{' '}
      left
    </p>
    <p className={styles.p}>
      Read your{' '}
      <Link to="/notes" className={styles.a}>
        notes
      </Link>
    </p>
  </div>
)

const mapStateToProps = state => ({
  userInfo: state.auth,
  todosLeft: getVisibleTodos(state.todos, state.todosFilters).filter(
    todo => !todo.completed
  ).length
})

export default connect(mapStateToProps)(Dashboard)
