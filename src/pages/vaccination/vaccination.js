import axios from "axios";
import React, { useEffect, useState } from "react";
import { CVPieChart } from "../../components/chart/pie/pieChart";
import { StatsCard } from "../../components/stats-card/stats-card";
import "./vaccination.scss";
export const Vaccination = () => {
  const [publicReports, setPublicReports] = useState(null);
  const [cards, setCards] = useState(null);
  const [pieCharts, setPieCharts] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date="
      )
      .then((responseData) => {
        const response = responseData.data;
        setPublicReports(response);
        const vaccination = response?.topBlock?.vaccination;
        const vaccinationByAge = response?.vaccinationByAge;
        let cardsData = [];
        cardsData.push(
          ...[
            {
              label: "Vaccines",
              value: vaccination?.total,
              delta: vaccination?.today,
              cardClass: "cv-info",
            },
            {
              label: "Partially vaccinated",
              value: vaccination?.tot_dose_1,
              delta: vaccination?.today_dose_one,
              cardClass: "cv-warning",
            },
            {
              label: "Fully vaccinated",
              value: vaccination?.tot_dose_2,
              delta: vaccination?.today_dose_two,
              cardClass: "cv-success",
            },
            {
              label: "Covishield",
              value: vaccination?.covishield,
              delta: 0,
              cardClass: "cv-alert",
            },
            {
              label: "Covaxin",
              value: vaccination?.covaxin,
              delta: 0,
              cardClass: "cv-info",
            },
            {
              label: "Sputnik",
              value: vaccination?.sputnik,
              delta: 0,
              cardClass: "cv-primary",
            },
            {
              label: "Male",
              value: vaccination?.male,
              delta: 0,
              cardClass: "cv-success",
            },
            {
              label: "Female",
              value: vaccination?.female,
              delta: 0,
              cardClass: "cv-primary",
            },
            {
              label: "Others",
              value: vaccination?.others,
              delta: 0,
              cardClass: "cv-info",
            },
          ]
        );

        let pieChartsData = [];

        pieChartsData.push(
          ...[
            {
              title: "Dose 1 vs Dose 2",
              data: [
                { name: "Dose1", value: vaccination?.tot_dose_1 },
                { name: "Dose2", value: vaccination?.tot_dose_2 },
              ],
            },
            {
              title: "Vaccine brands",
              data: [
                { name: "Covishield", value: vaccination?.covishield },
                { name: "Covaxin", value: vaccination?.covaxin },
                { name: "Sputnik", value: vaccination?.sputnik },
              ],
            },
            {
              title: "Gender",
              data: [
                { name: "Male", value: vaccination?.male },
                { name: "Female", value: vaccination?.female },
                { name: "Others", value: vaccination?.others },
              ],
            },
            {
              title: "Vaccination by Age",
              data: [
                { name: "Above60", value: vaccinationByAge?.above_60 },
                { name: "18-45", value: vaccinationByAge?.vac_18_45 },
                { name: "45-60", value: vaccinationByAge?.vac_45_60 },
              ],
            },
          ]
        );

        setPieCharts(pieChartsData);
        setCards(cardsData);
      });
  }, []);
  return (
    <div className="cv-main-container">
      <div className="cv-row">
        {cards &&
          cards.map((item, i) => {
            if (i < 3)
              return (
                <div className="cv-stats-card">
                  <StatsCard card={item}></StatsCard>
                </div>
              );
          })}
      </div>
      <div className="cv-row">
        {cards &&
          cards.map((item, i) => {
            if (i >= 3 && i < 6)
              return (
                <div className="cv-stats-card">
                  <StatsCard card={item}></StatsCard>
                </div>
              );
          })}
      </div>
      <div className="cv-row">
        {cards &&
          cards.map((item, i) => {
            if (i >= 6 && i < 9)
              return (
                <div className="cv-stats-card">
                  <StatsCard card={item}></StatsCard>
                </div>
              );
          })}
      </div>
      <div className="cv-row">
        {pieCharts &&
          pieCharts.map((item, index) => {
            return (
              <div className="cv-pie-chart-container">
                <CVPieChart
                  pieData={item.data}
                  title={item.title}
                  className="pie-card"
                ></CVPieChart>
              </div>
            );
          })}
      </div>
    </div>
  );
};
