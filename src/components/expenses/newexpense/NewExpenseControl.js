import styles from "./NewExpenseControl.module.css";

const NewExpenseControl = props => {
  return (
    <div className={styles["new-expense__control"]}>
      <label>{props.label}</label>
      {props.children}
    </div>
  );
};

export default NewExpenseControl;
