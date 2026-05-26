export type Todo = {
    id: string;
    text: string;
    completed: boolean;
};

export type TodoItemProps = {
    todo: Todo;
    handleToggleTodo: (id: string) => void;
}

export type TodoListProps = {
    todos: Todo[];
    handleToggleTodo: (id: string) => void;
}

export type TodoSummaryProps = {
    completedTodosAmount: number;
    totalTodosAmount: number;
}