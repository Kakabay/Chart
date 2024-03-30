import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { PriceData } from '../ChartData';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

interface IProps {
  prices: number[];
  years: string[];
  title: string;
}

const LineChart = ({ prices, years, title }: IProps) => {
  const [chartData, setChartData] = useState({
    labels: years,
    datasets: [
      {
        label: 'Price',
        data: prices,

        fill: 'white',
        tension: 0,
        backgroundColor: '#e2e04d',
        borderColor: '#99971c',
        borderWidth: 4,
      },
    ],
  });

  console.log('render');

  const options = {
    animations: {
      tension: {
        duration: 2000,
        easing: 'ease',
        from: 1,
        to: 0.1,
        loop: true,
      },
    },

    scales: {
      y: {
        ticks: { color: 'white', beginAtZero: true },
      },
      x: {
        ticks: { color: 'white', beginAtZero: true },
      },
    },
  };

  return (
    <div className="line-chart">
      <h1 className="chart-title">{title}</h1>
      <div className="chart">
        <Line data={chartData} options={options}></Line>
      </div>
    </div>
  );
};

export default LineChart;
