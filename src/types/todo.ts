export type Todo = {
    id: string;
    text: string;
    completed: boolean;
};

export type TodoItemProps = {
    todo: Todo;
}

export type TodoListProps = {
    todos: Todo[];
}

export type TodoSummaryProps = {
    completedTodosAmount: number;
    totalTodosAmount: number;
}