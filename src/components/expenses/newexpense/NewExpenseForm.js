import { useState } from "react";
import { v4 as uuid } from "uuid";

import NewExpenseControl from "./NewExpenseControl";
import "./NewExpenseForm.css";

const NewExpenseForm = props => {
  const [title, setTitle] = useState("");
  const titleChangeHandler = event => setTitle(event.target.value);
  const [amount, setAmount] = useState("");
  const amountChangeHandler = event => setAmount(event.target.value);
  const [date, setDate] = useState("");
  const dateChangeHandler = event => setDate(event.target.value);

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
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <NewExpenseControl label="Title">
          <input type="text" value={title} onChange={titleChangeHandler} />
        </NewExpenseControl>
        <NewExpenseControl label="Amount">
          <input
            type="nubmer"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </NewExpenseControl>
        <NewExpenseControl label="Date">
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </NewExpenseControl>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
