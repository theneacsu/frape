import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../../../actions/auth/auth'
import styles from './Login.module.css'

export const Login = props => (
  <div className={styles.wrapperDiv}>
    <div className={styles.contentDiv}>
      <h1 className={styles.h1}>Holistic Integration</h1>
      <h2 className={styles.h2}>
        Increase your performance, focus and productivity
      </h2>
      <button className={styles.button} onClick={props.startLogin}>
        Get started with Google
      </button>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(
  undefined,
  mapDispatchToProps
)(Login)
