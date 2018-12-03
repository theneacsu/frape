import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setHideCompleted,
  setShowAll,
  setSearchTerm
} from '../../../actions/todo-app/filters'

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
      <div>
        <input
          type="text"
          placeholder="search a todo"
          onChange={this.onChangeSearch}
        />
        <label htmlFor="completed-todos">Hide completed</label>
        <input
          type="checkbox"
          id="completed-todos"
          onChange={this.onChangeCheckbox}
        />
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
