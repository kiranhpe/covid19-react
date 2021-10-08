import axios from "axios";
import React, { useEffect, useState } from "react";
import { StatsCard } from "../../components/stats-card/stats-card";
import "./vaccination.scss";
export const Vaccination = () => {
  const [publicReports, setPublicReports] = useState(null);
  const [cards, setCards] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date="
      )
      .then((responseData) => {
        const response = responseData.data;
        setPublicReports(response);
        const vaccination = response?.topBlock?.vaccination;
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
    </div>
  );
};
