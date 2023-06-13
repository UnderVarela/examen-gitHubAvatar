import React from 'react'
import PropTypes from 'prop-types'

export function TodoItem ({ itemValue }) {
  const { task, checked } = itemValue
  return (
    <li className='flex items-center justify-between p-2 border-b-2 gap-9'>
      <div>
        <input checked={checked} className='mr-2' type='checkbox' />
        {task}
      </div>
      <button
        disabled
        className='px-2 py-1 text-white bg-red-500 border rounded-full'
      > Eliminar
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  itemValue: PropTypes.object
}
