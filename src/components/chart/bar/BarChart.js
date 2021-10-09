import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./barChart.scss";
export const CVBarChart = ({ barChartData, bars }) => {
  return (
    <ResponsiveContainer>
      <BarChart
        data={barChartData}
        margin={{
          top: 0,
          right: 50,
          left: 50,
          bottom: 100,
        }}
      >
        <XAxis
          dataKey="name"
          interval={0}
          angle={-45}
          textAnchor="end"
          fontSize="12"
        />
        <Tooltip />
        <Legend verticalAlign="top" iconType="circle"/>
        {bars.map((item, index) => {
          return (
            <Bar
              dataKey={item.dataKey}
              stackId="a"
              fill={item.fill}
              key={"bar-" + index}
            />
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
};
