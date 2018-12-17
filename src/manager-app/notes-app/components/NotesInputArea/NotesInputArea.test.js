import React from 'react'
import { shallow } from 'enzyme'
import { NotesInputArea } from './NotesInputArea'

test('Should render the NotesInputArea component correctly', () => {
  const wrapper = shallow(<NotesInputArea startAddNote={() => {}} />)
  expect(wrapper).toMatchSnapshot()
})

test('Should call startAddNote with the right data', () => {
  const note = {
    title: 'Write snapshot test',
    body: 'It is awesome'
  }
  const history = {
    push: jest.fn()
  }
  const startAddNoteSpy = jest.fn()
  const wrapper = shallow(
    <NotesInputArea startAddNote={startAddNoteSpy} history={history} />
  )
  wrapper.find('NotesForm').prop('onSubmit')(note)
  expect(startAddNoteSpy).toHaveBeenLastCalledWith(note)
  expect(history.push).toHaveBeenCalledWith('/notes')
})
