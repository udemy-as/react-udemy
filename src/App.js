import React, { useEffect, useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'a1', title: 'car', amount: 100, date: new Date(2022, 1, 1) },
  { id: 'a2', title: 'bus', amount: 200, date: new Date(2021, 1, 2) },
  { id: 'b1', title: 'train', amount: 300, date: new Date(2020, 1, 4) },
  { id: 'b2', title: 'plane', amount: 400, date: new Date(2020, 1, 6) },
];
const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses(DUMMY_EXPENSES);
  }, []);

  const addExpenseHandler = (expense) => {
    const newExpense = {
      id: expense.id,
      title: expense.enteredTitle,
      amount: expense.enteredAmount,
      date: new Date(expense.enteredDate),
    };
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
