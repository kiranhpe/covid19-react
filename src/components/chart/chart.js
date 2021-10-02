import React from 'react'
import { LineChart, Line, ResponsiveContainer } from "recharts";

export const Chart = ({chart}) => {
    return (
        <ResponsiveContainer>
            <LineChart data={chart?.data}>
              <Line
                dot={false}
                type="natural"
                dataKey={chart?.name}
                stroke={chart?.strokeColor}
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
    )
}
