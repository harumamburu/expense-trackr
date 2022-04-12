import Card from "../common/Card";
import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = props => {
  return (
    <li>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={props.expense.date} />
        <div className={styles["expense-item__description"]}>
          <h2>{props.expense.title}</h2>
          <div className={styles["expense-item__price"]}>{props.expense.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
