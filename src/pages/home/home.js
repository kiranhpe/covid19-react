import axios from "axios";
import React, { useEffect, useState } from "react";

import "./home.scss";
import { getCovidDataAPI, getTimeSeriesAPI } from "../../constants/endpoints";
import { DropDown } from "../../components/select/select";
import { statesConfig } from "../../constants/states";
import { Table } from "../../components/table/table";
import { StatsCard } from "../../components/stats-card/stats-card";
import { CVPieChart } from "../../components/chart/pie/pieChart";

const Home = () => {
  const [cards, setCards] = useState(null);
  const [charts, setCharts] = useState(null);
  const [pieCharts, setPieCharts] = useState(null);
  const [states, setStates] = useState({
    states: [],
  });

  const [mainData, setMainData] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [timeSeries, setTimeSeries] = useState(null);
  const [statesLoading, setStatesLoading] = useState(true);

  const [currentState, setCurrentState] = useState("TT");

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchHomePageData = () => {
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
            cardClass: "cv-info",
          },
          {
            label: "Partially vaccinated",
            value: tempdashdata?.[currentState]?.total?.vaccinated1,
            delta: tempdashdata?.[currentState]?.delta7?.vaccinated1,
            cardClass: "cv-success",
          },
          {
            label: "Fully vaccinated",
            value: tempdashdata?.[currentState]?.total?.vaccinated2,
            delta: tempdashdata?.[currentState]?.delta7?.vaccinated2,
            cardClass: "cv-primary",
          },
          {
            label: "Vaccinated",
            value:
              tempdashdata?.[currentState]?.total?.vaccinated2 +
              tempdashdata?.[currentState]?.total?.vaccinated1,
            delta:
              tempdashdata?.[currentState]?.delta7?.vaccinated2 +
              tempdashdata?.[currentState]?.delta7?.vaccinated2,
            cardClass: "cv-info",
          },
        ];
        let pieChartsData = [];
        pieChartsData.push([
          {
            name: "Confirmed",
            value: tempdashdata?.[currentState]?.total?.confirmed,
          },
          {
            name: "Active",
            value:
              tempdashdata?.[currentState]?.total?.confirmed -
              (tempdashdata?.[currentState]?.total?.deceased +
                tempdashdata?.[currentState]?.total?.recovered),
          },
          {
            name: "Recovered",
            value: tempdashdata?.[currentState]?.total?.recovered,
          },
          {
            name: "Deceased",
            value: tempdashdata?.[currentState]?.total?.deceased,
          },
          {
            name: "Others",
            value: tempdashdata?.[currentState]?.total?.other,
          },
        ]);
        pieChartsData.push([
          {
            name: "Dose1",
            value: tempdashdata?.[currentState]?.total?.vaccinated1,
          },
          {
            name: "Dose2",
            value: tempdashdata?.[currentState]?.total?.vaccinated2,
          },
        ]);
        setPieCharts(pieChartsData);
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
              dose_1: jsonData[currentState].dates[item].delta7?.vaccinated1
                ? jsonData[currentState].dates[item].delta7?.vaccinated1
                : 0,
              dose_2: jsonData[currentState].dates[item].delta7?.vaccinated2
                ? jsonData[currentState].dates[item].delta7?.vaccinated2
                : 0,
              vaccine:
                jsonData[currentState].dates[item].delta7?.vaccinated2 +
                jsonData[currentState].dates[item].delta7?.vaccinated1
                  ? jsonData[currentState].dates[item].delta7?.vaccinated2 +
                    jsonData[currentState].dates[item].delta7?.vaccinated1
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
            strokeColor: "#885AF8",
          },
          {
            name: "dose_1",
            data: chartData.map((x) => {
              return { name: x.name, dose_1: x.dose_1 };
            }),
            strokeColor: "#2ED47A",
          },
          {
            name: "dose_2",
            data: chartData.map((x) => {
              return { name: x.name, dose_2: x.dose_2 };
            }),
            strokeColor: "#109CF1",
          },
          {
            name: "vaccine",
            data: chartData.map((x) => {
              return { name: x.name, vaccine: x.vaccine };
            }),
            strokeColor: "#885AF8",
          },
        ];

        setCharts(tempCharts);
      });
    };

    fetchHomePageData();
  }, [currentState]);

  const fetchStates = () => {
    let selectStatesFeed = statesConfig.map((v) => {
      return { value: v.key, label: v.name };
    });
    setStates({ states: selectStatesFeed });
    setStatesLoading(false);
  };

  const extractDataForTable = (satatesOrDistricts, rawData = []) => {
    let meanigfulData = [];
    Object.keys(rawData).forEach((item, index) => {
      if (currentState === "TT") {
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
      } else {
        if (item === currentState)
          Object.keys(rawData[item]?.districts).forEach(
            (district, districtIndex) => {
              meanigfulData.push({
                districtName: district,
                confirm: rawData[item].districts[district].total?.confirmed
                  ? rawData[item].districts[district].total?.confirmed
                  : 0,
                active: getActive(
                  rawData[item].districts[district].total?.confirmed,
                  rawData[item].districts[district].total?.recovered,
                  rawData[item].districts[district].total?.deceased
                ),
                recovered: rawData[item].districts[district].total?.recovered
                  ? rawData[item].districts[district].total?.recovered
                  : 0,
                deceased: rawData[item].districts[district].total?.deceased
                  ? rawData[item].districts[district].total?.deceased
                  : 0,
                tested: rawData[item].districts[district].total?.tested
                  ? rawData[item].districts[district].total?.tested
                  : 0,
              });
            }
          );
      }
    });

    return meanigfulData;
  };

  const getActive = (confirmed = 0, recovered = 0, deceased = 0) => {
    return confirmed - (recovered + deceased);
  };

  useEffect(() => {
    if (mainData && states.states.length > 0) {
      setTableData(extractDataForTable(states.states, mainData));
    }
  }, [currentState, mainData]);

  return (
    <div className="cv-main-container">
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
              if (i < 4) {
                return (
                  <div className="cv-stats-card">
                    <StatsCard
                      card={cards ? cards[i] : null}
                      chart={charts ? charts[i] : null}
                      key={i}
                    ></StatsCard>
                  </div>
                );
              } else {
                return null;
              }
            })
          : null}
      </div>
      <div className="cv-row">
        {cards
          ? cards.map((x, i) => {
              if (i > 3) {
                return (
                  <div className="cv-stats-card">
                    <StatsCard
                      card={cards ? cards[i] : null}
                      chart={charts ? charts[i] : null}
                      key={i}
                    ></StatsCard>
                  </div>
                );
              } else {
                return null;
              }
            })
          : null}
      </div>
      <div className="cv-row">
        {pieCharts &&
          pieCharts.map((item, index) => {
            return (
              <div className="cv-pie-chart-container">
                <CVPieChart pieData={item} className="pie-card"></CVPieChart>
              </div>
            );
          })}
      </div>
      {mainData && (
        <div className="cv-stats-table">
          <Table
            theaders={[
              currentState === "TT" ? "State" : "District",
              "Confirmed",
              "Active",
              "Recovered",
              "Deseased",
              "Tested",
            ]}
            tbody={tableData}
            formatter={"hi"}
            onRowClick={()=>{}}
          ></Table>
        </div>
      )}
    </div>
  );
};

export default Home;
