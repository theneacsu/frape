import React from 'react'
import { connect } from 'react-redux'
import { setSearchText } from '../../../../actions/notes-app/filters'
import styles from './NotesSearchArea.module.css'

const NotesSearchArea = props => (
  <div>
    <input
      className={['input', styles.input].join(' ')}
      type="text"
      placeholder="Search in notes"
      autoFocus
      value={props.searchTerm}
      onChange={e => props.setSearchText(e.target.value)}
    />
  </div>
)

const mapDispatchToProps = dispatch => ({
  setSearchText: searchTerm => dispatch(setSearchText(searchTerm))
})

const mapStateToProps = state => ({
  searchTerm: state.notesFilters.searchTerm
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesSearchArea)
