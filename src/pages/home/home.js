import axios from "axios";
import React, { useEffect, useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { FaArrowUp, FaRegClock } from "react-icons/fa";

import "./home.scss";
import { Card } from "../../components/card/card";
import { getCovidDataAPI, getTimeSeriesAPI } from "../../constants/endpoints";

const Home = () => {

  const [cards, setCards] = useState(null);
  const [charts, setCharts] = useState(null);

  useEffect(() => {
    axios
      .get(getCovidDataAPI())
      .then((covidDataResponse) => {
        const tempdashdata = covidDataResponse.data;
        let tempCards = [
          {
            label: "confirmed",
            value: tempdashdata?.TT.total.confirmed,
            delta: tempdashdata?.TT.delta.confirmed,
            cardClass: "cv-alert",
          },
          {
            label: "active",
            value:
              tempdashdata?.TT.total.confirmed -
              (tempdashdata?.TT.total.deceased +
                tempdashdata?.TT.total.recovered),
            delta: 0,
            cardClass: "cv-primary",
          },
          {
            label: "recovered",
            value: tempdashdata?.TT.total.recovered,
            delta: tempdashdata?.TT.delta.recovered,
            cardClass: "cv-success",
          },
          {
            label: "deceased",
            value: tempdashdata?.TT.total.deceased,
            delta: tempdashdata?.TT.delta.deceased,
            cardClass: "cv-warning",
          },
        ];

        setCards(tempCards);
          });
          axios
          .get(getTimeSeriesAPI())
          .then((timeSeriesResponse) => {
            const jsonData = timeSeriesResponse.data;
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
           let tempCharts = [
              {
                name: "confirmed",
                data: chartData.map((x) => {
                  return { name: x.name, confirmed: x.confirm };
                }),
                strokeColor: "#F7685B",
              },
              {
                name: "active",
                data: chartData.map((x) => {
                  return { name: x.name, active: x.active };
                }),
                strokeColor: "#109CF1",
              },
              {
                name: "recovered",
                data: chartData.map((x) => {
                  return { name: x.name, recovered: x.recovered };
                }),
                strokeColor: "#2ED47A",
              },
              {
                name: "deceased",
                data: chartData.map((x) => {
                  return { name: x.name, deceased: x.deceased };
                }),
                strokeColor: "#FFB946",
              },
            ];

            setCharts(tempCharts);
      });
  }, []);

  return (
    <div className="cv-home">
      <div className="cv-row">
        {cards ? cards.map((x,i)=> {return <Card
          card={cards ? cards[i] : null}
          chart={charts ? charts[i] : null}
        ></Card>}) : null}
      </div>
    </div>
  );
};

const getActive = (confirmed = 0, recovered = 0, deceased = 0) => {
  return confirmed - (recovered + deceased);
};

export default Home;
