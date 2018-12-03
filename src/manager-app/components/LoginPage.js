import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../../actions/auth/auth'

export const LoginPage = props => (
  <div>
    <h1>We care about performance.</h1>
    <h2>Do you?</h2>
    <p>Login with</p>
    <button onClick={props.startLogin}>Google</button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage)
