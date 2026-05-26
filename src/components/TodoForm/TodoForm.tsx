import './TodoForm.css'

export function TodoForm() {
    return (
        <form className="todo-form">
            <h1 className='add-todo-header'>Add A Todo</h1>
            <input className='todo-input' placeholder="Insert a new Todo"></input>
            <button className='add-button'>Add</button>
        </form>
    )
}