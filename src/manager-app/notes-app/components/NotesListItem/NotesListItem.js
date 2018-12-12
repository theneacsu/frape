import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotesListItem.module.css'

const NotesListItem = props => (
  <div className={styles.div}>
    <div classname={styles.wrapperH1}>
      <Link to={`/notes/${props.id}`} className={styles.a}>
        <h1 className={styles.h1}>{props.title}</h1>
      </Link>
    </div>
    <p className={styles.p}>{props.body}</p>
  </div>
)

export default NotesListItem
