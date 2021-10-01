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
        Object.keys(jsonData.TT.dates).forEach((item, index) => {
          if (index % 15 === 0) {
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
          }
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
            {dashboard?.TT.delta.confirmed !== 0 && (
              <span className="cv-delta">
                <FaArrowUp className="cv-icon" />
                {dashboard?.TT.delta.confirmed.toLocaleString()}
              </span>
            )}
          </span>
          <div className="cv-chart-container">
            <ResponsiveContainer>
              <LineChart data={dashboardChar}>
                <Line
                  dot={false}
                  type="natural"
                  dataKey="confirm"
                  stroke="#F7685B"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
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
          <div className="cv-chart-container">
            <ResponsiveContainer>
              <LineChart data={dashboardChar}>
                <Line
                  dot={false}
                  type="natural"
                  dataKey="active"
                  stroke="#109CF1"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="cv-card cv-success">
          <div className="cv-last-updated">
            <FaRegClock className="cv-icon" />
            {dashboard?.TT.meta.date}
          </div>
          <span className="cv-label">Recovered</span>
          <span className="cv-count">
            {dashboard?.TT.total.recovered.toLocaleString()}{" "}
            {dashboard?.TT.delta.recovered !== 0 && (
              <span className="cv-delta">
                <FaArrowUp className="cv-icon" />
                {dashboard?.TT.delta.recovered.toLocaleString()}
              </span>
            )}
          </span>
          <div className="cv-chart-container">
            <ResponsiveContainer>
              <LineChart data={dashboardChar}>
                <Line
                  dot={false}
                  type="natural"
                  dataKey="recovered"
                  stroke="#2ED47A"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="cv-card cv-warning">
          <div className="cv-last-updated">
            <FaRegClock className="cv-icon" />
            {dashboard?.TT.meta.date}
          </div>
          <span className="cv-label">Deceased</span>
          <span className="cv-count">
            {dashboard?.TT.total.deceased.toLocaleString()}
            {dashboard?.TT.delta.deceased && (
              <span className="cv-delta">
                <FaArrowUp className="cv-icon" />
                {dashboard?.TT.delta.deceased.toLocaleString()}
              </span>
            )}
          </span>
          <div className="cv-chart-container">
            <ResponsiveContainer>
              <LineChart data={dashboardChar}>
                <Line
                  dot={false}
                  type="natural"
                  dataKey="deceased"
                  stroke="#FFB946"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const getActive = (confirmed = 0, recovered = 0, deceased = 0) => {
  return confirmed - (recovered + deceased);
};

export default Home;
