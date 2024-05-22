// src/components/GradientBarLineChart.js
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Typography, MenuItem, Select, FormControl } from "@mui/material";
import { green } from "@mui/material/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const generateRandomData = () => {
  return Array.from({ length: 14 }, () => Math.floor(Math.random() * 5000));
};

const generateProcessedData = () => {
  return Array.from(
    { length: 14 },
    () => Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000
  );
};

const GradientBarLineChart = () => {
  const [selectedOption, setSelectedOption] = React.useState("Option 1");

  // Handle dropdown change
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Create gradient for bars
  const getGradient = (ctx, chartArea) => {
    const { top, bottom, left, right } = chartArea;
    const gradient = ctx.createLinearGradient(left, top, right, bottom);
    gradient.addColorStop(0, "rgba(10, 102, 194, 1)");
    gradient.addColorStop(1, "rgba(62, 142, 220, 0.74)");
    return gradient;
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        type: "bar",
        label: "Received",
        backgroundColor: (context) => {
          const { chart } = context;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        data: generateRandomData(),
        borderRadius: { topLeft: 6, topRight: 6 },
      },
      {
        type: "line",
        label: "Processed",
        borderColor: "#002B55",
        borderWidth: 2,
        fill: false,
        data: generateProcessedData(),
        tension: 0.4,
        pointRadius: 0, // No points
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        display: true,
        ticks: {
          callback: (value) => value / 1000 + "k",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className="chart-div">
      <Bar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 12,
                  weight: 400,
                },
              },
            },
            y: {
              beginAtZero: true,
              display: true,
              ticks: {
                count: 5,
                font: {
                  size: 11,
                  weight: 400,
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
              position: "top",
            },
            title: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default GradientBarLineChart;
