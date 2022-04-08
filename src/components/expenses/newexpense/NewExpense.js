import "./NewExpense.css";

import Card from "../../common/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <Card className="new-expense">
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
