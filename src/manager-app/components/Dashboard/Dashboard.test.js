import React from 'react'
import { shallow } from 'enzyme'
import { Dashboard } from './Dashboard'

test('Should render correctly the Dashboard component', () => {
  const user = {
    uid: '123abc',
    photoURL:
      'https://lh4.googleusercontent.com/-3HA5dfxwrYU/AAAAAAAAAAI/AAAAAAAAEJ4/q6fYoZQpeEY/photo.jpg',
    displayName: 'Bradley Cooper',
    email: 'test@test.com'
  }
  const wrapper = shallow(<Dashboard userInfo={user} todosLeft={3} />)
  expect(wrapper).toMatchSnapshot()
})
