import type { TodoSummaryProps } from '../../types/todo'
import './TodoSummary.css'

export function TodoSummary({completedTodosAmount, totalTodosAmount}: TodoSummaryProps) {
    return (
        <div className='summarized-todos'>
            <h1 className='summarized-header'>Your Summarized Todos:</h1>
            <p className='summarized-amount'>You have completed {completedTodosAmount} out of {totalTodosAmount} Todos</p>
        </div>
    )
}