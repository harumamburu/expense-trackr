import ExpenseItem from "./ExpenseItem";
import styles from "./ExpensesList.module.css";

const ExpensesList = props => {
  return (
    <div>
      {props.expenses.length === 0 ?
        <h2 className={styles["expenses-list__fallback"]}>No expenses found.</h2>
      :
        <ul className={styles["expenses-list"]}>
          {props.expenses.map(expense => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </ul>
      }
    </div>
  );
};

export default ExpensesList;
