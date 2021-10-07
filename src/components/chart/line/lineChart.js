import React from 'react'
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export const CVLineChart = ({chart}) => {
    return (
        <ResponsiveContainer>
            <LineChart data={chart?.data}>
              <Line
                dot={false}
                type="basis"
                dataKey={chart?.name}
                stroke={chart?.strokeColor}
                strokeWidth={3}
              />
                <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} labelFormatter={(value) => ''} />
            </LineChart>
          </ResponsiveContainer>
    )
}
