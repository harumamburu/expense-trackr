import ExpensesList from "./components/expenses/ExpensesList";
import NewExpense from "./components/expenses/newexpense/NewExpense";

import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([
    { title: "React text book", amount: "$20", date: new Date(2021, 11, 30) },
    { title: "MacBook", amount: "$100500", date: new Date(2022, 2, 30) },
    { title: "Wape thingy", amount: "$15", date: new Date(2022, 3, 5) },
    { title: "Checked shirt", amount: "$105", date: new Date(2022, 3, 6) }
  ]);

  const addExpenseHandler = expense => setExpenses([...expenses, expense]);

  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler} />
      <ExpensesList expenses={expenses} />
    </div>
  );
};

export default App;
