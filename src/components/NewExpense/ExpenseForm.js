import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const defaultFormState = {
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  };
  const [userInput, setUserInput] = useState(defaultFormState);
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = { ...userInput };
    props.onSaveExpenseData(expenseData);
    setUserInput(defaultFormState);
    setShowExpenseForm(false);
  };

  const collapsedForm = <button onClick={() => setShowExpenseForm(true)}>Add new expense</button>;

  const expandedForm = (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title {userInput.enteredTitle}</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount {userInput.enteredAmount} </label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date {userInput.enteredDate}</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2022-01-01"
            max="2022-12-24"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => setShowExpenseForm(false)}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  return showExpenseForm ? expandedForm : collapsedForm;
};

export default ExpenseForm;
