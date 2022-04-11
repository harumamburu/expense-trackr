import { useState } from "react";

import Card from "../common/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = props => {
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
      {filteredExpenses.map(expense =>
        <ExpenseItem key={expense.id} expense={expense} />
      )}
    </Card>
  );
};

export default ExpensesList;
