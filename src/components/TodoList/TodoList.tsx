import type { TodoListProps } from '../../types/todo'
import { TodoItem } from '../TodoItem/TodoItem'
import './TodoList.css'

export function TodoList({ todos, handleToggleTodo, handleRemoveTodo }: TodoListProps) {

    return (
        todos.length>0 ? 
        <div className='todo-list'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo} handleRemoveTodo={handleRemoveTodo}></TodoItem>
            ))}
        </div> : <p className='todo-list'>There Are No Todos</p>
    )
}