import React, { Component } from 'react'
import styles from './NotesForm.module.css'

class NotesForm extends Component {
  state = {
    title: this.props.note ? this.props.note.title : '',
    body: this.props.note ? this.props.note.body : '',
    error: undefined
  }

  onInputChange = e => {
    const title = e.target.value
    this.setState(() => ({ title }))
  }

  onTextareaChange = e => {
    const body = e.target.value
    this.setState(() => ({ body }))
  }

  onFormSubmit = e => {
    e.preventDefault()

    if (this.state.title.trim().length > 2) {
      const data = {
        body: this.state.body,
        title: this.state.title
      }
      this.props.onSubmit(data)
    } else {
      const error = 'The title must have at least 3 characters.'
      this.setState(() => ({ error }))
    }
  }

  onButtonRemove = () => {
    this.props.onRemove()
  }

  render() {
    return (
      <div className={styles.wrapperDiv}>
        <div className="container">
          <form className={styles.form} onSubmit={this.onFormSubmit}>
            <input
              className="input"
              type="text"
              placeholder={this.props.titlePlaceholder}
              value={this.state.title}
              onChange={this.onInputChange}
            />
            {this.state.error && <p className="error">{this.state.error}</p>}
            <textarea
              className={styles.textarea}
              placeholder={this.props.bodyPlaceholder}
              value={this.state.body}
              onChange={this.onTextareaChange}
            />
            {this.props.purpose === 'edit' ? (
              <button
                type="submit"
                className={[styles.button, styles.save].join(' ')}
              >
                Save
              </button>
            ) : (
              <button
                type="submit"
                className={[styles.button, styles.save].join(' ')}
              >
                Add
              </button>
            )}
          </form>
          {this.props.purpose === 'edit' && (
            <button
              onClick={this.onButtonRemove}
              className={[styles.button, styles.delete].join(' ')}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default NotesForm
