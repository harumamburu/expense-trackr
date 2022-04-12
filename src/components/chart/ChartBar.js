import styles from "./ChartBar.module.css";

const ChartBar = props => {
  const barFillHeight =
    (props.maxValue > 0
      ? Math.round((props.value / props.maxValue) * 100)
      : 0) + "%";

  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div className={styles["chart-bar__fill"]} style={{ height: barFillHeight }} />
      </div>
      <div className={styles["chart-bar__label"]}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
