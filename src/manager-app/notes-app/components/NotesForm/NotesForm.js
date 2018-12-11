import React, { Component } from 'react'

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
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="ex: Pizza is the devil!"
            value={this.state.title}
            onChange={this.onInputChange}
            autoFocus
          />
          <textarea
            placeholder="Try to stay away from junk food and try to cook most of your meals"
            value={this.state.body}
            onChange={this.onTextareaChange}
          />
          {this.props.purpose === 'edit' ? (
            <button type="submit">Save</button>
          ) : (
            <button type="submit">Add</button>
          )}
        </form>
        {this.props.purpose === 'edit' && (
          <button onClick={this.onButtonRemove}>Delete</button>
        )}
      </div>
    )
  }
}

export default NotesForm
