import React from 'react'
import { shallow } from 'enzyme'
import NotesListItem from './NotesListItem'

test('Should render the NotesListItem component correctly', () => {
  const note = {
    id: '123abc',
    text: 'Go to store',
    body: 'Buy food'
  }
  const wrapper = shallow(<NotesListItem {...note} />)
  expect(wrapper).toMatchSnapshot()
})
