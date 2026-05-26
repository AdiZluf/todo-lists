import { useState } from "react";
import { TodoFilter } from "./components/TodoFilter/TodoFilter";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoHeader } from "./components/TodoHeader/TodoHeader";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSummary } from "./components/TodoSummary/TodoSummary";
import { mockTodos } from "./data/TodoMock";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(mockTodos);
  const todosAmount = todos.length;
  const completedTodosAmount = todos.filter((todo) => (todo.completed)).length;

  return (
    <div className="todo-app">
      <TodoHeader></TodoHeader>
      <TodoFilter></TodoFilter>
      <TodoList todos={todos}></TodoList>
      <TodoForm></TodoForm>
      <TodoSummary totalTodosAmount={todosAmount} completedTodosAmount={completedTodosAmount}></TodoSummary>
    </div>
  );
}


