import styles from "./ExpensesFilter.module.css";

const ExpensesFilter = props => {
  const selectInputHandler = event => props.onFilterChange(event.target.value);

  const years = [2022, 2021, 2020, 2019];
  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectInputHandler}>
          <option />
          {years.map((year, index) =>
            <option key={index}>{year}</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
