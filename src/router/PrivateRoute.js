import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../manager-app/components/Header'
import Footer from '../manager-app/components/Footer'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div class="layout">
          <Header />
          <div className="layout-main-content">
            <Component {...props} />
          </div>
          <Footer />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
)

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
