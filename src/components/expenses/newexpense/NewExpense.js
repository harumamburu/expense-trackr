import "./NewExpense.css";

import Card from "../../common/Card";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = () => {
  return (
    <Card className="new-expense">
      <NewExpenseForm />
    </Card>
  );
};

export default NewExpense;
