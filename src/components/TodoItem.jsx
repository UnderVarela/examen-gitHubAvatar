import React, { useState } from 'react'
import PropTypes from 'prop-types'

export function TodoItem ({ itemValue, onDeleteItem, onSelectItem }) {
  const { id, task, checked } = itemValue
  const classBoton = checked ? 'bg-red-500' : 'bg-red-800'
  const handleChange = ({ target }) => {
    onSelectItem(id)
  }
  const handleDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className='flex items-center justify-between p-2 border-b-2 gap-9'>
      <div>
        <input
          onChange={handleChange}
          checked={checked}
          className='mr-2'
          type='checkbox'
        />
        {task}
      </div>
      <button
        onClick={handleDelete}
        disabled={!checked}
        className={`px-2 py-1 text-white ${classBoton} border rounded-full`}
      > Eliminar
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  itemValue: PropTypes.object,
  onDeleteItem: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired
}
