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
import "./StockChart.css";

const StockChart = ({ firstData, secondData, labels, footer}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    {
      id: "sampleId",
      afterDraw: function (chart, easing) {
        if (
          chart.tooltip._active &&
          chart.tooltip._active.length &&
          chart.config.type === "line"
  
        ) {
          const activePoint = chart.tooltip._active[0];
          const ctx = chart.ctx;
          const x = activePoint.element.x;
          const topY = chart.scales.y.top;
          const bottomY = chart.scales.y.bottom;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.lineWidth = 2;
          ctx.strokeStyle = "#8c8c8c";
          ctx.stroke();
  
          ctx.restore();
        }
       
      },
    }
  );
  
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
        text: "Chart for Stock Price and News Count",
      },
    },
    showTooltips: true,
    tooltips: {
      mode: "index",
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
      {footer}
    </div>
  );
};

export default StockChart;
