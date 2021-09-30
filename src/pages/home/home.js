import axios from "axios";
import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { FaArrowUp } from "react-icons/fa";
import "./home.scss";
const Home = () => {
  const [dashboard, setDashboard] = useState(null);
  useEffect(() => {
    axios
      .get("https://data.covid19india.org/v4/min/data.min.json")
      .then((res) => {
        setDashboard(res.data);
      });
  }, []);

  return (
    <div className="cv-home">
      <div className="cv-row">
        <div className="cv-card cv-alert">
          <span className="cv-label">Confirmed</span>
          <span className="cv-count">
            {dashboard?.TT.total.confirmed}{" "}
            <span className="cv-delta">
              <FaArrowUp className="cv-icon" />
              {dashboard?.TT.delta.confirmed}
            </span>
          </span>
          <div>
              <LineChart
                width={300}
                height={100}
                data={data}
              >
                <Line dot={false} type="natural" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
          </div>
        </div>
        <div className="cv-card cv-warning">
          <span className="cv-label">Deceased</span>
          <span className="cv-count">
            {dashboard?.TT.total.deceased}
            <span className="cv-delta">
              <FaArrowUp className="cv-icon" />
              {dashboard?.TT.delta.deceased}
            </span>
          </span>
        </div>
        <div className="cv-card cv-primary">
          <span className="cv-label">Active</span>
          <span className="cv-count">
            {dashboard?.TT.total.confirmed -
              (dashboard?.TT.total.deceased + dashboard?.TT.total.recovered)}
          </span>
        </div>
        <div className="cv-card cv-success">
          <span className="cv-label">Recovered</span>
          <span className="cv-count">
            {dashboard?.TT.total.recovered}{" "}
            <span className="cv-delta">
              <FaArrowUp className="cv-icon" />
              {dashboard?.TT.delta.recovered}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default Home;
