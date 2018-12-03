import authReducer from '../../reducers/authReducer'

test('Should set the default state for authReducer', () => {
  const action = { type: '@@INIT' }
  const state = authReducer(undefined, action)
  expect(state).toEqual({})
})

test('Should login correctly', () => {
  const uid = '123abc'
  const photoURL =
    'https://lh4.googleusercontent.com/-3HA5dfxwrYU/AAAAAAAAAAI/AAAAAAAAEJ4/q6fYoZQpeEY/photo.jpg'
  const displayName = 'Bradley Cooper'
  const email = 'test@test.com'
  const action = {
    type: 'LOGIN',
    uid,
    photoURL,
    displayName,
    email
  }
  const state = authReducer({}, action)
  expect(state).toEqual({ uid, photoURL, displayName, email })
})

test('Should logout correctly', () => {
  const action = { type: 'LOGOUT' }
  const state = authReducer({ uid: '123abc' }, action)
  expect(state).toEqual({})
})
