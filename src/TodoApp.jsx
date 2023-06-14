import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { useTodo } from './hooks/useTodo'
import TodoOptions from './components/TodoOptions'

export function TodoApp () {
  const {
    getTodos,
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
          Lista de Tareas
        </h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList todo={getTodos()} onSelectItem={handleSelectItem} onDeleteItem={handleDeleteItem} />
        {/* Opciones de ToDo */}
        <TodoOptions handleSelectAll={handleSelectAll} handleDeleteAll={handleDeleteAll} />
      </section>
    </>
  )
}
