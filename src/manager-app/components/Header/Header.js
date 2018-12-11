import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../../actions/auth/auth'
import styles from './Header.module.css'

export const Header = props => (
  <div className={styles.wrapperDiv}>
    <div className={styles.containerDiv}>
      <nav className={styles.nav}>
        <NavLink
          className={styles.menuItem}
          to="/dashboard"
          activeClassName={styles.active}
        >
          Dashboard
        </NavLink>
        <NavLink
          className={styles.menuItem}
          to="/todos"
          activeClassName={styles.active}
        >
          Todos
        </NavLink>
        <NavLink
          className={styles.menuItem}
          to="/notes"
          activeClassName={styles.active}
        >
          Notes
        </NavLink>
      </nav>
      <button className={styles.button} onClick={props.startLogout}>
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
