import React, { useState } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

export function TodoApp () {
  const [todo, setTodo] = useState([])
  const handleAddTodo = task => {
    task = task.trim()
    // setTodo([ // shallow clone
    //   {
    //     id: Date.now(),
    //     checked: false,
    //     task
    //   },
    //   ...todo
    // ])
    const clone = structuredClone(todo) // deep clone
    clone.push({
      id: Date.now(),
      checked: false,
      task
    })
    setTodo(clone)
  }
  const handleSelectAll = () => {
    if (!todo.length) return
    const nuevoArray = todo.map(item => {
      return { ...item, checked: true }
    })
    setTodo(nuevoArray)
  }
  const handleDeleteItem = id => {
    const data = todo.filter(item => item.id !== id)
    setTodo(data)
  }
  return (
    <>
      <section className='grid gap-3'>
        <h1
          className='text-4xl font-bold'
        >
          To Do List
        </h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList todo={todo} onDeleteItem={handleDeleteItem} />
        {/* Opciones de ToDo */}
        <fieldset className='flex items-center gap-2'>
          <button
            onClick={handleSelectAll}
            className='px-2 py-1 text-white bg-blue-500 border rounded-full hover:bg-blue-700'
          >Seleccionar todo
          </button>
          <button
            className='px-2 py-1 text-white bg-red-500 border rounded-full'
          >Eliminar todo
          </button>
        </fieldset>
      </section>
    </>
  )
}
