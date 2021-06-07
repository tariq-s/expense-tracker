import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense'

import Expenses from './components/Expenses';

const data = [
	{
		id: 'e1',
		title: 'Groceries',
		amount: 700,
		date: new Date(2020, 7, 14),
	},
	{
		id: 'e2',
		title: 'New TV',
		amount: 20000,
		date: new Date(2021, 2, 12)
	},
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 1800,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 6400,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {

	const [expenses, setExpenses] = useState(data);

	const addExpenseHandler = newExpense => {
		setExpenses(prevExpenses => {
			return [newExpense, ...prevExpenses]
		})
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
