import type { TodoItemProps } from "../../types/todo";
import './TodoItem.css'

export function TodoItem({ todo, handleToggleTodo, handleRemoveTodo }: TodoItemProps) {
    return (
        <li className="todo-body">
            <div className="todo-left">
                <input className={`todo-checkbox ${todo.completed ? "checkbox-completed" : ""}`}
                    type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)}/>
                <p className={`todo-text ${todo.completed ? "completed-text" : ""
                    }`}> {todo.text}</p>
            </div>
            <button className="remove-todo" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        </li>
    )
}