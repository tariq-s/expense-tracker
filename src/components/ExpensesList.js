import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css"
const ExpensesList = ({ expenses }) => {

    if (expenses.length === 0)
        return <h2 className="expenses-list__fallback">No expenses for this year.</h2>;

    return (<ul className="expenses-list">
        {expenses.map(expense => {
            return <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={expense.id} />
        })}
    </ul>
    );
}

export default ExpensesList;