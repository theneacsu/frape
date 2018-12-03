import { login, logout } from '../../../actions/auth/auth'

test('Should generate correctly the action object for login', () => {
  const uid = '123abc'
  const photoURL =
    'https://lh4.googleusercontent.com/-3HA5dfxwrYU/AAAAAAAAAAI/AAAAAAAAEJ4/q6fYoZQpeEY/photo.jpg'
  const displayName = 'Bradley Cooper'
  const email = 'test@test.com'
  const user = {
    uid,
    photoURL,
    displayName,
    email
  }

  const action = login(user)
  expect(action).toEqual({
    type: 'LOGIN',
    ...user
  })
})

test('Should generate correctly the action object for logout', () => {
  const action = logout()
  expect(action).toEqual({ type: 'LOGOUT' })
})
