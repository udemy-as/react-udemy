import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No items for selected year</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((item, index) => (
        <ExpenseItem key={index} {...item} />
      ))}
    </ul>
  );
};

export default ExpensesList;
