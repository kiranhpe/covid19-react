import axios from "axios";
import React, { useEffect, useState } from "react";

import "./home.scss";
import { Card } from "../../components/card/card";
import { getCovidDataAPI, getTimeSeriesAPI } from "../../constants/endpoints";
import { DropDown } from "../../components/select/select";
import { statesConfig } from "../../constants/states";
import { Table } from "../../components/table/table";

const Home = () => {
  const [cards, setCards] = useState(null);
  const [charts, setCharts] = useState(null);
  const [states, setStates] = useState({
    states: [],
  });

  const [mainData, setMainData] = useState(null);
  const [timeSeries, setTimeSeries] = useState(null);
  const [statesLoading, setStatesLoading] = useState(true);

  const [currentState, setCurrentState] = useState("TT");

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    axios.get(getCovidDataAPI()).then((covidDataResponse) => {
      const tempdashdata = covidDataResponse.data;
      setMainData(tempdashdata);
      let tempCards = [
        {
          label: "Confirmed",
          value: tempdashdata?.[currentState]?.total?.confirmed,
          delta: tempdashdata?.[currentState]?.delta?.confirmed,
          cardClass: "cv-alert",
        },
        {
          label: "Active",
          value:
            tempdashdata?.[currentState]?.total?.confirmed -
            (tempdashdata?.[currentState]?.total?.deceased +
              tempdashdata?.[currentState]?.total?.recovered),
          delta: 0,
          cardClass: "cv-primary",
        },
        {
          label: "Recovered",
          value: tempdashdata?.[currentState]?.total?.recovered,
          delta: tempdashdata?.[currentState]?.delta?.recovered,
          cardClass: "cv-success",
        },
        {
          label: "Deceased",
          value: tempdashdata?.[currentState]?.total?.deceased,
          delta: tempdashdata?.[currentState]?.delta?.deceased,
          cardClass: "cv-warning",
        },
        {
          label: "Tested",
          value: tempdashdata?.[currentState]?.total?.tested,
          delta: tempdashdata?.[currentState]?.delta7?.tested,
          cardClass: "",
        },
      ];

      setCards(tempCards);
    });
    axios.get(getTimeSeriesAPI()).then((timeSeriesResponse) => {
      const jsonData = timeSeriesResponse.data;
      setTimeSeries(jsonData);
      let chartData = [];
      Object.keys(jsonData[currentState].dates).forEach((item, index) => {
        if (index % 15 === 0) {
          chartData.push({
            name: item,
            confirm: jsonData[currentState].dates[item].delta7?.confirmed
              ? jsonData[currentState].dates[item].delta7?.confirmed
              : 0,
            active: getActive(
              jsonData[currentState].dates[item].delta7?.confirmed,
              jsonData[currentState].dates[item].delta7?.recovered,
              jsonData[currentState].dates[item].delta7?.deceased
            ),
            recovered: jsonData[currentState].dates[item].delta7?.recovered
              ? jsonData[currentState].dates[item].delta7?.recovered
              : 0,
            deceased: jsonData[currentState].dates[item].delta7?.deceased
              ? jsonData[currentState].dates[item].delta7?.deceased
              : 0,
            tested: jsonData[currentState].dates[item].delta7?.tested
              ? jsonData[currentState].dates[item].delta7?.tested
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
        {
          name: "tested",
          data: chartData.map((x) => {
            return { name: x.name, tested: x.tested };
          }),
          strokeColor: "#000",
        },
      ];

      setCharts(tempCharts);
    });
  }, [currentState]);

  const fetchStates = () => {
    let selectStatesFeed = statesConfig.map((v) => {
      return { value: v.key, label: v.name };
    });
    setStates({ states: selectStatesFeed });
    setStatesLoading(false);
  };

  return (
    <div className="cv-home">
      <DropDown
        placeholder="State"
        data={states.states}
        onStateChange={(e) => {
          setCurrentState(e.value);
        }}
        isLoading={statesLoading}
      ></DropDown>
      <div className="cv-row">
        {cards
          ? cards.map((x, i) => {
              return (
                <Card
                  card={cards ? cards[i] : null}
                  chart={charts ? charts[i] : null}
                  key={i}
                ></Card>
              );
            })
          : null}
      </div>
      {mainData && (
        <Table
          theaders={[
            "State",
            "Confirmed",
            "Active",
            "Recovered",
            "Deseased",
            "Tested",
          ]}
          tbody={extractDataForTable(mainData, states.states)}
          formatter={"hi"}
        ></Table>
      )}
    </div>
  );
};

const extractDataForTable = (rawData = [], satatesOrDistricts) => {
  let meanigfulData = [];
  Object.keys(rawData).forEach((item, index) => {
    if (item !== "TT")
      meanigfulData.push({
        stateName: satatesOrDistricts.find((x) => x.value === item)?.label,
        confirm: rawData[item].total?.confirmed
          ? rawData[item].total?.confirmed
          : 0,
        active: getActive(
          rawData[item].total?.confirmed,
          rawData[item].total?.recovered,
          rawData[item].total?.deceased
        ),
        recovered: rawData[item].total?.recovered
          ? rawData[item].total?.recovered
          : 0,
        deceased: rawData[item].total?.deceased
          ? rawData[item].total?.deceased
          : 0,
        tested: rawData[item].total?.tested ? rawData[item].total?.tested : 0,
      });
  });

  return meanigfulData;
};

const getActive = (confirmed = 0, recovered = 0, deceased = 0) => {
  return confirmed - (recovered + deceased);
};

export default Home;