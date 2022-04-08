import ExpensesList from "./components/ExpensesList";

export default function App() {
  const expenses = [
    { title: "MacBook", amount: "$100500", date: new Date(2022, 3, 4) },
    { title: "Wape thingy", amount: "$15", date: new Date(2022, 3, 5) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensesList expenses={expenses} />
    </div>
  );
}
