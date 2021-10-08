import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import './pieChart.scss';

export const CVPieChart = ({ pieData, title }) => {
  const COLORS = ["#109CF1", "#2ED47A", "#885AF8", "#F7685B"];
  return (
    <div className="cv-pie-container">
      <b>{title}</b>
      <PieChart height={250} width={350}>
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
    </div>
  );
};
