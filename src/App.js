import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expenses/newexpense/NewExpense";

const INIT_DATA = [
  {
    id: "e1",
    title: "React text book",
    amount: "$20",
    date: new Date(2021, 11, 30),
  },
  {
    id: "e2",
    title: "MacBook",
    amount: "$100500",
    date: new Date(2022, 2, 30),
  },
  { id: "e3", title: "Wape thingy", amount: "$15", date: new Date(2022, 3, 5) },
  {
    id: "e4",
    title: "Checked shirt",
    amount: "$105",
    date: new Date(2022, 3, 6),
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(INIT_DATA);

  const addExpenseHandler = expense =>
    setExpenses(oldExpenses => [...oldExpenses, expense]);

  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
