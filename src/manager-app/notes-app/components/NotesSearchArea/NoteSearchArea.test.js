import React from 'react'
import { shallow } from 'enzyme'
import { NotesSearchArea } from './NotesSearchArea'

let searchTerm, setSearchTextSpy, wrapper

beforeEach(() => {
  searchTerm = ''
  setSearchTextSpy = jest.fn()
  wrapper = shallow(
    <NotesSearchArea searchTerm={searchTerm} setSearchText={setSearchTextSpy} />
  )
})

test('Should render NoteSearchArea component correctly with empty searchTerm', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should render NoteSearchArea component correctly with searchTerm provided', () => {
  searchTerm = 'pizza'
  const wrapper = shallow(
    <NotesSearchArea searchTerm={searchTerm} setSearchText={() => {}} />
  )
  expect(wrapper).toMatchSnapshot()
})

test('Should call setSearchArea with the right value', () => {
  const value = 'coffee'
  wrapper.find('input').simulate('change', {
    target: {
      value
    }
  })
  expect(setSearchTextSpy).toHaveBeenLastCalledWith(value)
})
