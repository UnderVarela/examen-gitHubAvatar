import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

export function TodoList ({ todo = [] }) {
  return (
    <ul className='grid w-80'>
      {/* Componente TodoItem */}
      {
        todo.map(item => (
          <TodoItem key={item?.id} itemValue={item} />
        ))
      }
    </ul>
  )
}

TodoList.todoypes = {
  todo: PropTypes.array
}
