import React, { useState } from 'react'
import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
const Expenses = ({ expenses }) => {
    const [currentYear, setCurrentYear] = useState('2021')

    const onSelectYear = (selectedYear) => {
        setCurrentYear(selectedYear)
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === currentYear;
    });


    return (
        <Card className='expenses'>
            <ExpensesFilter selected={currentYear} onSelectYear={onSelectYear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )
}

export default Expenses
