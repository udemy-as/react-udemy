import React, { useEffect, useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses([
      { id: 'a1', title: 'car', amount: 100, date: new Date(2022, 1, 1) },
      { id: 'a2', title: 'bus', amount: 200, date: new Date(2022, 1, 2) },
      { id: 'b1', title: 'train', amount: 300, date: new Date(2022, 1, 4) },
      { id: 'b2', title: 'plane', amount: 400, date: new Date(2022, 1, 6) },
    ]);
  }, []);

  const addExpenseHandler = (expense) => {
    const newExpenses = [
      ...expenses,
      {
        id: expense.id,
        title: expense.enteredTitle,
        amount: expense.enteredAmount,
        date: new Date(expense.enteredDate),
      },
    ];
    setExpenses(newExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
