import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../../manager-app/components/Header/Header'
import Footer from '../../manager-app/components/Footer/Footer'
import styles from './PrivateRoute.module.css'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div className={styles.div}>
          <Header />
          <div className={styles.componentDiv}>
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
