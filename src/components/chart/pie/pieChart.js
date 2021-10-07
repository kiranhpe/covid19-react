import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

export const CVPieChart = ({ pieData }) => {

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <PieChart height={300} width={400}>
      <Pie
        data={pieData}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend iconType="circle" fontSize={4} />
    </PieChart>
  );
};
