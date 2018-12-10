import React, { Component } from 'react'
import styles from './TodoForm.module.css'

class TodoForm extends Component {
  state = {
    todoText: this.props.todo ? this.props.todo.text : '',
    completed: this.props.todo ? this.props.todo.completed : false,
    error: undefined
  }

  onInputChange = e => {
    const todoText = e.target.value
    this.setState(() => ({ todoText }))
  }

  onSubmitHandler = e => {
    e.preventDefault()

    if (this.state.todoText.trim().length > 2) {
      this.props.onSubmit({
        text: this.state.todoText,
        completed: this.state.completed
      })
      this.setState(() => ({ error: undefined, todoText: '' }))
    } else {
      const error = 'The todo must have at least 3 characters.'
      this.setState(() => ({ error }))
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitHandler} className={styles.form}>
          <input
            className={['input', styles.input].join(' ')}
            type="text"
            placeholder={this.props.placeholder}
            value={this.state.todoText}
            onChange={this.onInputChange}
          />
          <button className={styles.button}>{this.props.buttonText}</button>
        </form>
      </div>
    )
  }
}

export default TodoForm
