import axios from "axios";
import React, { useEffect, useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

import { FaArrowUp, FaRegClock } from "react-icons/fa";
import "./home.scss";
const Home = () => {
  const [dashboard, setDashboard] = useState(null);
  const [dashboardChar, setDashboardChar] = useState(null);
  useEffect(() => {
    axios
      .get("https://data.covid19india.org/v4/min/data.min.json")
      .then((res) => {
        setDashboard(res.data);
      });

    axios
      .get("https://data.covid19india.org/v4/min/timeseries.min.json")
      .then((res) => {
        const jsonData = res.data;
        let chartData = [];
        Object.keys(jsonData.TT.dates).forEach((item) => {
          chartData.push({
            name: item,
            confirm: jsonData.TT.dates[item].delta7?.confirmed
              ? jsonData.TT.dates[item].delta7?.confirmed
              : 0,
            active: getActive(
              jsonData.TT.dates[item].delta7?.confirmed,
              jsonData.TT.dates[item].delta7?.recovered,
              jsonData.TT.dates[item].delta7?.deceased
            ),
            recovered: jsonData.TT.dates[item].delta7?.recovered
              ? jsonData.TT.dates[item].delta7?.recovered
              : 0,
            deceased: jsonData.TT.dates[item].delta7?.deceased
              ? jsonData.TT.dates[item].delta7?.deceased
              : 0,
          });
        });
        setDashboardChar(chartData);
      });
  }, []);

  return (
    <div className="cv-home">
      <div className="cv-row">
        <div className="cv-card cv-alert">
          <div className="cv-last-updated">
            <FaRegClock className="cv-icon" />
            {dashboard?.TT.meta.date}
          </div>
          <span className="cv-label">Confirmed</span>
          <span className="cv-count">
            {dashboard?.TT.total.confirmed.toLocaleString()}
            <span className="cv-delta">
              <FaArrowUp className="cv-icon" />
              {dashboard?.TT.delta.confirmed.toLocaleString()}
            </span>
          </span>
          <div className="cv-chart">
            <LineChart width={300} height={100} data={dashboardChar}>
              <Line
                dot={false}
                type="natural"
                dataKey="confirm"
                stroke="#F7685B"
                strokeWidth={2}
              />
            </LineChart>
          </div>
        </div>

        <div className="cv-card cv-primary">
          <div className="cv-last-updated">
            <FaRegClock className="cv-icon" />
            {dashboard?.TT.meta.date}
          </div>
          <span className="cv-label">Active</span>
          <span className="cv-count">
            {(
              dashboard?.TT.total.confirmed -
              (dashboard?.TT.total.deceased + dashboard?.TT.total.recovered)
            ).toLocaleString()}
          </span>
          <LineChart width={300} height={100} data={dashboardChar}>
            <Line
              dot={false}
              type="natural"
              dataKey="active"
              stroke="#F7685B"
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="cv-card cv-success">
          <div className="cv-last-updated">
            <FaRegClock className="cv-icon" />
            {dashboard?.TT.meta.date}
          </div>
          <span className="cv-label">Recovered</span>
          <span className="cv-count">
            {dashboard?.TT.total.recovered.toLocaleString()}{" "}
            <span className="cv-delta">
              <FaArrowUp className="cv-icon" />
              {dashboard?.TT.delta.recovered.toLocaleString()}
            </span>
          </span>
          <LineChart width={300} height={100} data={dashboardChar}>
            <Line
              dot={false}
              type="natural"
              dataKey="recovered"
              stroke="#F7685B"
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="cv-card cv-warning">
          <div className="cv-last-updated">
            <FaRegClock className="cv-icon" />
            {dashboard?.TT.meta.date}
          </div>
          <span className="cv-label">Deceased</span>
          <span className="cv-count">
            {dashboard?.TT.total.deceased.toLocaleString()}
            <span className="cv-delta">
              <FaArrowUp className="cv-icon" />
              {dashboard?.TT.delta.deceased.toLocaleString()}
            </span>
          </span>
          <LineChart width={300} height={100} data={dashboardChar}>
            <Line
              dot={false}
              type="natural"
              dataKey="deceased"
              stroke="#F7685B"
              strokeWidth={2}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

const getActive = (confirmed = 0, recovered = 0, deceased = 0) => {
  return confirmed - (recovered + deceased);
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default Home;
