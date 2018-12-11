import React from 'react'
import { Link } from 'react-router-dom'

const NotesListItem = props => (
  <div>
    <Link to={`/notes/${props.id}`}>
      <h1>{props.title}</h1>
    </Link>
    <p>{props.body}</p>
  </div>
)

export default NotesListItem
