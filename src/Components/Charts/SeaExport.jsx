import React from "react";
import { Doughnut } from "react-chartjs-2";

const SeaExport = () => {
  const data = {
    labels: ["Active", "Ready to Load", "Ready to Unload", "Delayed"],
    datasets: [
      {
        data: [40, 12, 3, 23],
        backgroundColor: ["#4caf50", "#ff9800", "#2196f3", "#f44336"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div>
        <h2 className="text-lg font-bold text-center mb-4">Sea Export</h2>
        <div className="h-64">
          <Doughnut data={data} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default SeaExport;
