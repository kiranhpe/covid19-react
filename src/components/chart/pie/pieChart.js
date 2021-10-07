import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

export const CVPieChart = ({ pieData }) => {

  const COLORS = ["#109CF1", "#2ED47A", "#885AF8", "#F7685B"];
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
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend iconType="circle" fontSize={4} />
    </PieChart>
  );
};
