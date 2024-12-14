// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = () => {
  const data = {
    labels: ["", "", ""],
    datasets: [
      {
        label: "Opus Corner",
        data: [65, 59, 80],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 0.2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <> 
      <div className="w-full max-w-lg mx-auto flex justify-center items-center flex-col h-3/4">
      <span className="text-xl font-bold"> Opus Corner</span>
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default BarChart;
