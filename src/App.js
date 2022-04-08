import ExpensesList from "./components/ExpensesList";

export default function App() {
  const expenses = [
    { title: "React text book", amount: "$20", date: new Date(2021, 11, 30) },
    { title: "MacBook", amount: "$100500", date: new Date(2022, 2, 30) },
    { title: "Wape thingy", amount: "$15", date: new Date(2022, 3, 5) },
    { title: "Checked shirt", amount: "$105", date: new Date(2022, 3, 6) }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensesList expenses={expenses} />
    </div>
  );
}
