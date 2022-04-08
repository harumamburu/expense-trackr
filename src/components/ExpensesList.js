import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  return (
    <div className="expenses">
      {props.expenses.map(element =>
        <ExpenseItem
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      )}
    </div>
  );
}
