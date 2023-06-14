import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { useTodo } from './hooks/useTodo'

export function TodoApp () {
  const {
    todo,
    handleAddTodo,
    handleDeleteAll,
    handleDeleteItem,
    handleSelectAll,
    handleSelectItem
  } = useTodo()
  return (
    <>
      <section className='grid gap-3'>
        <h1
          className='text-4xl font-bold'
        >
          To Do List
        </h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList todo={todo} onSelectItem={handleSelectItem} onDeleteItem={handleDeleteItem} />
        {/* Opciones de ToDo */}
        <fieldset className='flex items-center gap-2'>
          <button
            onClick={handleSelectAll}
            className='px-2 py-1 text-white bg-blue-500 border rounded-full hover:bg-blue-700'
          >Seleccionar todo
          </button>
          <button
            onClick={handleDeleteAll}
            className='px-2 py-1 text-white bg-red-500 border rounded-full'
          >Eliminar todo
          </button>
        </fieldset>
      </section>
    </>
  )
}
