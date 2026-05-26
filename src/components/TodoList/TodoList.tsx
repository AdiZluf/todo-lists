import type { TodoListProps } from '../../types/todo'
import { TodoItem } from '../TodoItems/TodoItem'
import './TodoList.css'

export function TodoList({ todos }: TodoListProps) {
    return (
        <div className='todo-list'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}></TodoItem>
            ))}
        </div>
    )
}