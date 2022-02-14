import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((item, index) => (
        <ExpenseItem key={index} {...item} />
      ))}
    </div>
  );
}
