import { useState } from "react";

import Card from "../common/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = props => {
  const [filterYear, setFilterYear] = useState("");
  const dateFilterChangeHandler = newFilterYear => setFilterYear(newFilterYear);

  const filteredExpenses = props.expenses
    .filter(expense =>
      filterYear ? expense.date.getFullYear().toString() === filterYear : true
    )
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterChange={dateFilterChangeHandler}
      />
      {filterYear && <ExpensesChart expenses={filteredExpenses} />}
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
