import React from 'react'

function TodoOptions ({ handleSelectAll, handleDeleteAll }) {
  return (
    <fieldset className='flex items-center gap-2'>
      <button
        onClick={handleSelectAll}
        className='px-2 py-1 text-white bg-blue-500 border rounded-full hover:bg-blue-700'
      >
        Seleccionar todo
      </button>
      <button
        onClick={handleDeleteAll}
        className='px-2 py-1 text-white bg-red-500 border rounded-full'
      >
        Eliminar todo
      </button>
    </fieldset>
  )
}

export default TodoOptions
