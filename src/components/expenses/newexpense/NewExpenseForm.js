import { useState } from "react";
import { v4 as uuid } from "uuid";

import NewExpenseControl from "./NewExpenseControl";
import styles from "./NewExpenseForm.module.css";

const NewExpenseForm = props => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    const newExpenseData = {
      id: uuid(),
      title: title,
      amount: amount,
      date: new Date(date)
    };
    props.onSubmitExpenseData(newExpenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler} onReset={props.onCancelEditing}>
      <div className={styles["new-expense__controls"]}>
        <NewExpenseControl label="Title">
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </NewExpenseControl>
        <NewExpenseControl label="Amount">
          <input
            type="nubmer"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={event => setAmount(event.target.value)}
          />
        </NewExpenseControl>
        <NewExpenseControl label="Date">
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={event => setDate(event.target.value)}
          />
        </NewExpenseControl>
      </div>
      <div className={styles["new-expense__actions"]}>
        <button type="reset">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
