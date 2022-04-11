import { useState } from "react";

import Card from "../../common/Card";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);

  const submitExpenseDataHandler = newExpenseData => {
    props.onNewExpense(newExpenseData);
    setIsEditing(false);
  };

  return (
    <Card className="new-expense">
      {isEditing ?
        <NewExpenseForm
          onSubmitExpenseData={submitExpenseDataHandler}
          onCancelEditing={() => setIsEditing(false)}
        />
      :
        <button onClick={() => setIsEditing(true)}>Add New Expense</button>
      }
    </Card>
  );
};

export default NewExpense;
