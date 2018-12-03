import React from 'react'
import { shallow } from 'enzyme'
import { TodoFilterArea } from '../../../../manager-app/todo-app/todo-filter-area/TodoFilterArea'

let wrapper, setSearchTermSpy, setHideCompletedSpy, setShowAllSpy

beforeEach(() => {
  setSearchTermSpy = jest.fn()
  setHideCompletedSpy = jest.fn()
  setShowAllSpy = jest.fn()

  wrapper = shallow(
    <TodoFilterArea
      setSearchTerm={setSearchTermSpy}
      setHideCompleted={setHideCompletedSpy}
      setShowAll={setShowAllSpy}
    />
  )
})

test('Should render correctly the TodoFilterArea component', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should change the search term on input change', () => {
  const value = 'the'
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: {
        value
      }
    })
  expect(setSearchTermSpy).toHaveBeenLastCalledWith(value)
})

test('Should change hideCompleted to true on checkbox change', () => {
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: {
        checked: true
      }
    })
  expect(setHideCompletedSpy).toHaveBeenCalled()
})

test('Should change showAll to true on checkbox change', () => {
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: {
        checked: false
      }
    })
  expect(setShowAllSpy).toHaveBeenCalled()
})
