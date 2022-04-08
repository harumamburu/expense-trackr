import "./NewExpense.css";

import Card from "../../common/Card";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const submitExpenseDataHandler = newExpenseData => props.onNewExpense(newExpenseData);

  return (
    <Card className="new-expense">
      <NewExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
