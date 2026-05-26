import { useState } from 'react';
import './TodoForm.css'
import type { TodoFormProps } from '../../types/todo';

export function TodoForm({ handleAddTodo }: TodoFormProps) {
    const [inputValue, setInputValue] = useState("");
  
    return (
        <form className="todo-form"
            onSubmit={(event) => {
                event.preventDefault();
                handleAddTodo(inputValue);
                setInputValue("");
            }}>
            <h1 className='add-todo-header'>Add A Todo</h1>
            <input className='todo-input' value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Insert a new Todo"></input>
            <button className='add-button' type="submit">Add</button>
        </form>
    )
}