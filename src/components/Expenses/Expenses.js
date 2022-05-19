import Card from '../UI/Card';
import './Expenses.css';
import React, { useEffect, useState } from 'react';
import ExpensesFilter from 'components/ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredExpenseList, setFilteredExpenseList] = useState(props.items);
  const [filteredYear, setFilteredYear] = useState(2020);

  useEffect(() => {
    setFilteredExpenseList(props.items.filter((item) => item.date.getFullYear() === filteredYear));
  }, [filteredYear, props]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenseList} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList expenses={filteredExpenseList} />
    </Card>
  );
};

export default Expenses;
