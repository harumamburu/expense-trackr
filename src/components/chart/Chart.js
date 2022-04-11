import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {
  const maxValue = Math.max(...props.data.map(item => item.value));

  return (
    <div className="chart">
      {props.data.map((item, index) =>
        <ChartBar
          key={index}
          value={item.value}
          maxValue={maxValue}
          label={item.label}
        />
      )}
    </div>
  );
};

export default Chart;
