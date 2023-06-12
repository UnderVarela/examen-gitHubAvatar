import React, { useState } from 'react'

export function CounterApp () {
  const [count, setCount] = useState(0)

  const incrementar = () => {
    setCount(counter => counter + 1)
  }

  const disminuir = () => {
    setCount(counter => counter - 1)
  }

  const reiniciar = () => {
    setCount(0)
  }

  return (
    <main className='flex items-center justify-center h-screen bg-gray-200'>
      <div className='flex flex-col items-center justify-center gap-8 p-8 m-0 font-sans bg-white shadow-lg w-96 rounded-xl'>
        <h1 className='mb-4 text-9xl'>{count}</h1>
        <div className='flex'>
          <button
            className='px-4 py-2 mr-2 text-white bg-red-500 rounded-md'
            onClick={disminuir}
          >
            Reducir
          </button>
          <button
            className='px-4 py-2 mx-2 text-white bg-yellow-400 rounded-md'
            onClick={reiniciar}
          >
            Reiniciar
          </button>
          <button
            className='px-4 py-2 mx-2 text-white bg-blue-500 rounded-md'
            onClick={incrementar}
          >
            Aumentar
          </button>
        </div>
      </div>
    </main>
  )
}
