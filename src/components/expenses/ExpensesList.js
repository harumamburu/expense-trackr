import "./ExpensesList.css";

import Card from "../common/Card";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, index) =>
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
