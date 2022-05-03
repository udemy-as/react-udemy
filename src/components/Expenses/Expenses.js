import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import React, { useEffect, useState } from 'react';
import ExpensesFilter from 'components/ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  useEffect(() => {
    console.log(filteredYear);
  }, [filteredYear]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {props.items.map((item, index) => (
        <ExpenseItem key={index} {...item} />
      ))}
    </Card>
  );
};

export default Expenses;
