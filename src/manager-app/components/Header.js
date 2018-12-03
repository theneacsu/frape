import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth/auth'

export const Header = props => (
  <div>
    <NavLink to="/dashboard">Dashboard</NavLink>
    <NavLink to="/todos">Todo</NavLink>
    <button onClick={props.startLogout}>Logout</button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(
  undefined,
  mapDispatchToProps
)(Header)
