import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import './StockChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const StockChart = ({ firstData, secondData, labels }) => {
  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 5,
        },
      },
      y: {
        ticks: {
          maxTicksLimit: 5,
        },
      },
      y1: {
        position: "right",
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Multi Axis",
      },
    },
    showTooltips: true,
    tooltips: {
      mode: "x",
      intersect: false,
    },
    hover: {
      mode: "index",
      intersect: false,
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Stock Prices",
        data: firstData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "News Count",
        data: secondData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
        fill: true
      },
    ],
  };

  return (
    <div class="chart-container">
      <Line options={options} data={data} />
    </div>
  );
};

export default StockChart;
