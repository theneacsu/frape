import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../../actions/auth/auth'

export const LoginPage = props => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Holistic Integration</h1>
      <h2 className="box-layout__subtitle">
        Increase your performance, focus and productivity
      </h2>
      <button className="button" onClick={props.startLogin}>
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
)(LoginPage)
