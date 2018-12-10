import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setHideCompleted,
  setShowAll,
  setSearchTerm
} from '../../../../actions/todo-app/filters'
import styles from './TodoFilterArea.module.css'

export class TodoFilterArea extends Component {
  state = {
    showAll: true
  }

  onChangeCheckbox = e => {
    const checked = e.target.checked
    checked ? this.props.setHideCompleted() : this.props.setShowAll()
  }

  onChangeSearch = e => {
    const searchTerm = e.target.value
    this.props.setSearchTerm(searchTerm)
  }

  render() {
    return (
      <div className={styles.div}>
        <input
          className="input"
          type="text"
          placeholder="Search todos"
          onChange={this.onChangeSearch}
        />

        <input
          type="checkbox"
          className={styles.checkbox}
          id="completed-todos"
          onChange={this.onChangeCheckbox}
        />
        <label htmlFor="completed-todos">
          <span className={styles.span}>Hide completed</span>
        </label>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setSearchTerm: searchTerm => dispatch(setSearchTerm(searchTerm)),
  setHideCompleted: () => dispatch(setHideCompleted()),
  setShowAll: () => dispatch(setShowAll())
})

export default connect(
  undefined,
  mapDispatchToProps
)(TodoFilterArea)
