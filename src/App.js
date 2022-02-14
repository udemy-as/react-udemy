import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: 'a1', title: 'car', amount: 100, date: new Date(2022, 1, 1) },
    { id: 'a2', title: 'bus', amount: 200, date: new Date(2022, 1, 2) },
    { id: 'b1', title: 'train', amount: 300, date: new Date(2022, 1, 4) },
    { id: 'b2', title: 'plane', amount: 400, date: new Date(2022, 1, 6) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
