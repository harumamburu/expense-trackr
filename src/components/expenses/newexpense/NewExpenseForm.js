import "./NewExpenseForm.css";

import NewExpenseControl from "./NewExpenseControl";

import { useState } from "react";

const NewExpenseForm = () => {
  const [title, setTitle] = useState("");
  const titleChangeHandler = event => setTitle(event.target.value);
  const [amount, setAmount] = useState("");
  const amountChangeHandler = event => setAmount(event.target.value);
  const [date, setDate] = useState("");
  const dateChangeHandler = event => setDate(event.target.value);

  return (
    <form>
      <div className="new-expense__controls">
        <NewExpenseControl label="Title">
          <input type="text" onChange={titleChangeHandler} />
        </NewExpenseControl>
        <NewExpenseControl label="Amount">
          <input
            type="nubmer"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </NewExpenseControl>
        <NewExpenseControl label="Date">
          <input
            type="date"
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
