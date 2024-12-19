import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../customer.css";

const AirImportChart = () => {
  // Prepare data for Recharts with additional details
  const data = [
    { name: "Active", value: 40, color: "#4caf50" },
    { name: "Ready to Load", value: 12, color: "#ff9800" },
    { name: "Ready to Unload", value: 3, color: "#2196f3" },
    { name: "Delayed", value: 23, color: "#f44336" },
  ];

  // Calculate total
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  // Custom label rendering
  const CustomLabel = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, value } = props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      // chart data
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

  // Safe center text component
  const CenterText = (props) => {
    // Safely handle undefined props
    const cx = props.cx || props.viewBox?.cx || "50%";
    const cy = props.cy || props.viewBox?.cy || "50%";

    return (
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="middle"
        className="recharts-text recharts-label"
        fill="#333"
        fontWeight="bold"
        fontSize="14"
      >
        Total Exports: 78
      </text>
    );
  };

  return (
    <div className="w-3/6  p-4 rounded-lg ">
      <h2 className="text-lg font-bold text-center">Air Import </h2>
      <div className="h-72 relative ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="75%"
              innerRadius="50%"
              paddingAngle={2}
              dataKey="value"
              label={CustomLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Pie
              data={[{ name: "center", value: 123 }]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="50%"
              fill="transparent"
              label={CenterText}
            />
            <Tooltip
              formatter={(value, name) => {
                const percentage = ((value / total) * 100).toFixed(1);
                return [`${value} (${percentage}%)`, name];
              }}
            />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={{ paddingLeft: "20px" }}
              formatter={(value, entry) => {
                const { payload } = entry;
                const percentage = ((payload.value / total) * 100).toFixed(1);
                {
                  return (
                    value != "center" && (
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        {value} ({payload.value}) - {percentage}%
                      </span>
                    )
                  );
                }
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AirImportChart;
