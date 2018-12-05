import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth/auth'

export const Header = props => (
  <div className="box-header">
    <div className="header-container">
      <nav className="box-header__nav">
        <NavLink
          className="menu-item"
          to="/dashboard"
          activeClassName="is-active"
        >
          Dashboard
        </NavLink>
        <NavLink className="menu-item" to="/todos" activeClassName="is-active">
          Todos
        </NavLink>
      </nav>
      <button className="logout-button" onClick={props.startLogout}>
        Logout
      </button>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(
  undefined,
  mapDispatchToProps
)(Header)
