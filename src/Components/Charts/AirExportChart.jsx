import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import "../customer.css"
const AirExportChart = () => {
  // Chart data configuration
  const data = [
    { name: "Completed", value: 30, color: "#ff6384" },
    { name: "In Progress", value: 20, color: "#36a2eb" },
    { name: "Pending", value: 50, color: "#ffce56" },
  ];

  // Calculate total for percentage calculations
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  // Custom label for inside pie segments
  const CustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="bold"
        fontSize="14"
      >
        {value}
      </text>
    );
  };

  return (
    <div className="w-2/6 p-4 rounded-lg ">
      <h2 className="text-lg font-bold text-center">Air Export</h2>
      <div className="h-64 flex ">
        <ResponsiveContainer width="60%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="90%"
              label={CustomLabel}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => {
                const percentage = ((value / total) * 100).toFixed(1);
                return [`${value} (${percentage}%)`, name];
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Custom Legend on the right */}
        <div className="w-40 pl-4 flex flex-col justify-center">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center mb-2">
              <div
                className="w-4 h-4 mr-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <div>
                <span className="font-medium">{entry.name}</span>
                <span className="text-gray-500 ml-2">({entry.value})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirExportChart;
