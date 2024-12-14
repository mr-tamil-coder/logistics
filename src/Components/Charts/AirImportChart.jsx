import React from "react";
import { Doughnut } from "react-chartjs-2";


const AirImportChart = () => {
  const data = {
    labels: ["Active", "Ready to Load", "Ready to Unload", "Delayed"],
    datasets: [
      {
        data: [40, 12, 3, 23],
        
        backgroundColor: ["#4caf50", "#ff9800", "#2196f3", "#f44336"],
        
      },
    ],
  };
  const centerTextPlugin = { id: 'centerText', beforeDraw: function (chart)
     { const width = chart.width, height = chart.height, ctx = chart.ctx; ctx.restore();
       const fontSize = (height / 350).toFixed(2); ctx.font = fontSize + 'em sans-serif'; 
       ctx.textBaseline = 'middle'; 
       const text = 'Total exports:120'; 
        const textX = Math.round((width - ctx.measureText(text).width) / 2); 
        const textY = height / 1.6; 
        ctx.fillText(text, textX, textY); ctx.save(); }, };
        

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div>
        <h2 className="text-lg font-bold text-center mb-4">Air Import</h2>
        <div className="h-64">
          <Doughnut data={data} options={{ maintainAspectRatio: false }} plugins={[centerTextPlugin]} />
        </div>
      </div>
    </div>
  );
};

export default AirImportChart;
