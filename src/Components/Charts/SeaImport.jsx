import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js components (required for React Chart.js 2 to work)
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const SeaImport = () => {
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

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        color: '#ffffff', // Label text color
        formatter: (value, context) => {
          // Format to show percentage
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(1) + '%';
          return percentage;
        },
        font: {
          weight: 'bold',
        },
      },
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <h2 className="text-lg font-bold text-center mb-4">Sea Import</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default SeaImport;