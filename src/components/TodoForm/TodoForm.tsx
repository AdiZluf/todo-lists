import { mockTodos } from '../../data/TodoMock';
import { TodoFilter } from '../TodoFilter/TodoFilter';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoList } from '../TodoList/TodoList';
import { TodoSummary } from '../TodoSummary/TodoSummary';
import './TodoForm.css'
import { useState } from "react";


export function TodoForm() {
    const [todos, setTodos] = useState(mockTodos);

    return (
        <form className="todo-app">
            <TodoHeader></TodoHeader>
            <TodoFilter></TodoFilter>
            <TodoList todos={todos}></TodoList>
            <TodoSummary></TodoSummary>
        </form>
    )
}