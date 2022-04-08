import "./ExpensesList.css";

import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  return (
    <Card className="expenses">
      {props.expenses.map(expense =>
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )}
    </Card>
  );
}
