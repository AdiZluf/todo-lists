import type { TodoListProps } from '../../types/todo'
import { TodoItem } from '../TodoItem/TodoItem'
import './TodoList.css'

export function TodoList({ todos, handleToggleTodo }: TodoListProps) {

    return (
        <div className='todo-list'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo} ></TodoItem>
            ))}
        </div>
    )
}