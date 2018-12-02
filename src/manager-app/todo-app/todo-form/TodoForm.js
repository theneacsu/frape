import React from 'react'

const TodoForm = props => (
  <div>
    <form>
      <input type="text" placeholder={props.placeholder} />
      <button>{props.buttonText}</button>
    </form>
  </div>
)

export default TodoForm
