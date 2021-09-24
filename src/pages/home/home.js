import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/card";
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
        <div className="cv-card">
          <p>Confirmed: {dashboard?.TT.total.confirmed}</p>
          <p>Deceased: {dashboard?.TT.total.deceased}</p>
          <p>Recovered: {dashboard?.TT.total.recovered}</p>
        </div>
        <div className="cv-card">
          <p>Vaccinations: {dashboard?.TT.total.vaccinated1 + dashboard?.TT.total.vaccinated2}</p>
          <p>Partially Vaccinated: {dashboard?.TT.total.vaccinated1}</p>
          <p>Fully Vaccinated: {dashboard?.TT.total.vaccinated2}</p>
        </div>
        <div className="cv-card">
          <p>Vaccinations: {dashboard?.TT.total.vaccinated1 + dashboard?.TT.total.vaccinated2}</p>
          <p>Partially Vaccinated: {dashboard?.TT.total.vaccinated1}</p>
          <p>Fully Vaccinated: {dashboard?.TT.total.vaccinated2}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
