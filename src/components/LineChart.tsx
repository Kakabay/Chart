import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
} from 'chart.js';
import { useState } from 'react';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

interface IProps {
  id: number;
  index: number;
}

const LineChart = () => {
  const data = {
    labels: ['March', 'April', 'May'],
    datasets: [
      {
        // label: 'Sales of the year',
        data: [6, 3, 9],
        backgroundColor: 'white',
        borderColor: 'white',
        pointBorderColor: 'red',
        fill: 'white',
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      // legend: true,
    },
    // bac
    scales: {
      y: {
        // min: 3,
        // max: 6,
      },
    },
  };

  const [value, setValue] = useState<number>(0);

  // function useForceUpdate() {
  //   const [value, setValue] = useState<number>(0); // integer state
  //   return () => setValue((value: any) => value + 1); // update state to force render
  //   // A function that increment 👆🏻 the previous state like here
  //   // is better than directly setting `setValue(value + 1)`
  // }

  setTimeout(() => {
    setValue((value) => value + 1);
    console.log('render');
  }, 5100);

  return (
    <div className="line-chart">
      <h1>Header</h1>
      <div className="chart">
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default LineChart;
