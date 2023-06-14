import { useState } from 'react'

export function useTodo () {
  const [todo, setTodo] = useState([])
  const getTodos = () => {
    return structuredClone(todo)
  }
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
  const handleSelectItem = id => {
    const indice = todo.findIndex(item => item.id === id)
    const task = { ...todo.at(indice), checked: !todo.at(indice).checked }
    // setTodo(todo.with(indice, task)) <- .with todavia NO implementado en todos los navegadores

    const clone = structuredClone(todo)
    clone[indice] = task
    setTodo(clone)
    // Metodo tradicional:
    // setTodo([...todo.slice(0, indice), task, ...todo.slice(indice + 1, todo.length)])
  }
  const handleDeleteAll = () => {
    // Siempre que esté todo a true
    const checkedAll = todo.find(item => item.checked === false)
    if (!checkedAll) setTodo([])
  }

  return {
    getTodos,
    handleAddTodo,
    handleDeleteAll,
    handleDeleteItem,
    handleSelectAll,
    handleSelectItem
  }
}
