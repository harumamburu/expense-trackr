import { useState } from "react";

import Card from "../common/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = props => {
  const [filterYear, setFilterYear] = useState("");
  const dateFilterChangeHandler = newFilterDate => setFilterYear(newFilterDate);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilterChange={dateFilterChangeHandler} />
      {props.expenses
        .filter(expense =>
          filterYear
            ? expense.date.getFullYear().toString() === filterYear
            : true
        )
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((expense, index) =>
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
    </Card>
  );
};

export default ExpensesList;
