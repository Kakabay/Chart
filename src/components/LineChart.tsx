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
  index: number;
  years: string[];
  title: string;
}

const LineChart = ({ prices, years, title, index }: IProps) => {
  const [chartData, setChartData] = useState({
    labels: years,
    datasets: [
      {
        label: 'Price',
        data: prices,
        fill: 'origin', // Keep the fill origin for better visualization
        tension: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
        borderColor: '#99971c',
        borderWidth: 4,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: PriceData[index].year,
      datasets: [
        {
          label: 'Price',
          data: PriceData[index].price,
          fill: 'origin', // Keep the fill origin for better visualization
          tension: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
          borderColor: '#99971c',
          borderWidth: 4,
        },
      ],
    });
  }, [index]);

  console.log('render');

  const options = {
    animation: {
      duration: 1500, // Animation duration in milliseconds
      easing: 'linear', // Easing function to use
      loop: true, // If set to true, the animations loop endlessly
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true, // Show grid lines on the x-axis
          color: '#ffffff8d', // Set the grid line color to white
          lineWidth: 1, // Adjust the line width as needed
        },
        ticks: {
          color: 'white',
          beginAtZero: true,
          font: {
            size: 16, // Adjust the font size for y-axis labels
          },
        },
      },
      x: {
        beginAtZero: true,
        ticks: {
          color: 'white',
          beginAtZero: true,
          font: {
            size: 16, // Adjust the font size for y-axis labels
          },
        },
      },
    },
  };

  return (
    <div className="line-chart">
      <div className="chart">
        <h1 className="chart-title">{title}</h1>
        <Line data={chartData} options={options}></Line>
      </div>
    </div>
  );
};

export default LineChart;
