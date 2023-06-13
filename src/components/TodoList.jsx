import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

export function TodoList ({ todo = [], onDeleteItem }) {
  return (
    <ul className='grid w-80'>
      {/* Componente TodoItem */}
      {
        todo.map(item => (
          <TodoItem onDeleteItem={onDeleteItem} key={item?.id} itemValue={item} />
        ))
      }
    </ul>
  )
}

TodoList.propTypes = {
  todo: PropTypes.array,
  onDeleteItem: PropTypes.func
}
