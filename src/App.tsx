import { useState } from "react";
import { TodoFilter } from "./components/TodoFilter/TodoFilter";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoHeader } from "./components/TodoHeader/TodoHeader";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSummary } from "./components/TodoSummary/TodoSummary";
import { mockTodos } from "./data/TodoMock";
import "./App.css";

export default function App() {
  const [todos, setTodo] = useState(mockTodos);
  const todosAmount = todos.length;
  const completedTodosAmount = todos.filter((todo) => (todo.completed)).length;

  function handleToggleTodo(id: string) {
    setTodo(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }
  function handleAddTodo(todoText: string) {
    setTodo((prev) => [...prev, {
      id: crypto.randomUUID(),
      completed: false,
      text: todoText
    }])
  }

  function handleRemoveTodo(id: string) {
    setTodo((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  }

  return (
    <div className="todo-app">
      <TodoHeader></TodoHeader>
      <TodoFilter></TodoFilter>
      <TodoList todos={todos} handleToggleTodo={handleToggleTodo} handleRemoveTodo={handleRemoveTodo}></TodoList>
      <TodoForm handleAddTodo={handleAddTodo}></TodoForm>
      <TodoSummary totalTodosAmount={todosAmount} completedTodosAmount={completedTodosAmount} ></TodoSummary>
    </div>
  );
}

