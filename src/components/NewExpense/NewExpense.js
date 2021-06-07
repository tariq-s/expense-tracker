import React, { useState } from 'react'
import './NewExpense.css'
import NewExpenseButton from './NewExpenseButton';
import NewExpenseForm from './NewExpenseForm'

const NewExpense = ({ onAddExpense }) => {
    const [showForm, setShowForm] = useState(false);

    const toggleShowForm = () => {
        setShowForm(prevState => {
            return !prevState;
        })
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        onAddExpense(expenseData);
    }

    const newExpenseContent = showForm ?
        <NewExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            showFormHandler={toggleShowForm} /> :
        <NewExpenseButton showFormHandler={toggleShowForm} />

    return (
        <div className='new-expense'>
            {newExpenseContent}
        </div>
    )
}

export default NewExpense
