import { firebase, googleAuthProvider } from '../../firebase/firebase'

const login = ({ uid, photoURL, displayName, email }) => ({
  type: 'LOGIN',
  uid,
  photoURL,
  displayName,
  email
})

const startLogin = () => () =>
  firebase.auth().signInWithPopup(googleAuthProvider)

const logout = () => ({
  type: 'LOGOUT'
})

const startLogout = () => () => firebase.auth().signOut()

export { startLogin, startLogout, login, logout }
