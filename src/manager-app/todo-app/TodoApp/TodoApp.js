import React from 'react'
import TodoInputArea from '../components/todo-input-area/TodoInputArea'
import TodoFilterArea from '../components/todo-filter-area/TodoFilterArea'
import TodoList from '../components/todo-list/TodoList'
import styles from './TodoApp.module.css'

const TodoApp = () => (
  <div className={styles.div}>
    <div className="container">
      <TodoInputArea />
      <TodoFilterArea />
      <TodoList />
    </div>
  </div>
)

export default TodoApp
