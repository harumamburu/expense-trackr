import "./NewExpenseControl.css";

const NewExpenseControl = props => {
  return (
    <div className="new-expense__control">
      <label>{props.label}</label>
      {props.children}
    </div>
  );
};

export default NewExpenseControl;
