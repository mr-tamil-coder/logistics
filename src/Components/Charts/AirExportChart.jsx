import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components (required for React Chart.js 2 to work)
ChartJS.register(ArcElement, Tooltip, Legend);

const AirExportChart = () => {
  // Chart data and configuration
  const data = {
    labels: ['Completed', 'In Progress', 'Pending'], // Labels for the chart slices
    datasets: [
      {
        data: [30, 20, 50], // Data values for each slice
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'], // Colors for the slices
        hoverOffset: 4, // Slight offset effect when hovering
      },
    ],
  };

  return (
    // Wrapper div for responsive styling
    <div className="w-auto max-w-md mx-auto p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-center mb-4">Air Export</h2>
      <div className="h-40"> {/* Fixed height for the chart */}
        <Pie data={data} options={{ maintainAspectRatio: false }} /> {/* Adjust aspect ratio */}
      </div>
    </div>
  );
};

export default AirExportChart;
