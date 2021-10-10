import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/card";
import { CVBarChart } from "../../components/chart/bar/BarChart";
import { CVPieChart } from "../../components/chart/pie/pieChart";
import Maps from "../../components/maps/map";
import { DropDown } from "../../components/select/select";
import { StatsCard } from "../../components/stats-card/stats-card";
import { Table } from "../../components/table/table";
import "./vaccination.scss";
const Vaccination = () => {
  const [publicReports, setPublicReports] = useState(null);
  const [vaccinePublicReports, setVaccinePublicReports] = useState(null);
  const [cards, setCards] = useState(null);
  const [pieCharts, setPieCharts] = useState(null);
  const [lineCharts, setLineCharts] = useState(null);
  const [barChart, setBarCharts] = useState(null);
  const [vaccinationTable, setVaccinationTable] = useState(null);
  const [states, setStates] = useState(null);
  const [currentState, setCurrentState] = useState("");
  const [districts, setDistricts] = useState(null);
  const [currentDistrict, setCurrentDistrict] = useState("");

  const [selectedDropdown1, setSelectedDropdown1] = useState(null);
  const [selectedDropdown2, setSelectedDropdown2] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${currentState}&district_id=${currentDistrict}&date=`
      )
      .then(
        (responseData) => {
          const PublicReportsResponse = responseData.data;
          //if (PublicReportsResponse) {
          setPublicReports(PublicReportsResponse);
          const vaccination = PublicReportsResponse?.topBlock?.vaccination;
          const vaccinationByAge = PublicReportsResponse?.vaccinationByAge;
          const beneficiariesGroupBy =
            PublicReportsResponse?.getBeneficiariesGroupBy;

          setPieCharts(getPieChartData(vaccination, vaccinationByAge));
          setCards(getCardsData(vaccination, vaccinationByAge));
          setBarCharts(getBarChartsData(beneficiariesGroupBy));
          if (currentState === "") {
            setStates(getStatesFromRawData(beneficiariesGroupBy, ""));
            setVaccinationTable(getTableData(beneficiariesGroupBy, "", ""));

            setDistricts(null);
            setCurrentDistrict("");
          } else if (currentState !== "" && currentDistrict === "") {
            setDistricts(
              getStatesFromRawData(beneficiariesGroupBy, currentState)
            );
            setVaccinationTable(
              getTableData(beneficiariesGroupBy, currentState, "")
            );
          }
          // }
        },
        (error) => {
          console.log(error);
        }
      );
    axios
      .get(
        `https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=${currentState}&district_id=${currentDistrict}&date`
      )
      .then(
        (response) => {
          const vaccinePublicReportsJson = response.data;
          //if (publicReports && vaccinePublicReportsJson) {
          setVaccinePublicReports(vaccinePublicReportsJson);
          const weeklyReport = response.data?.weeklyReport;
          const weeklyVacAgeWiseReport = response.data?.weeklyVacAgeWiseReport;

          setLineCharts(getLineChartData(weeklyReport, weeklyVacAgeWiseReport));
          // }
        },
        (error) => {
          console.log(error);
        }
      );
  }, [currentState, currentDistrict, selectedDropdown1, selectedDropdown2]);

  const handleTableRowClick = (row) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (row.state_name) {
      setCurrentState(states.find((x) => x.label === row.state_name).value);
      setSelectedDropdown1(states.find((x) => x.label === row.state_name));
    } else if (row.district_name) {
      setCurrentDistrict(
        districts.find((x) => x.label === row.district_name).value
      );
      setSelectedDropdown2(
        districts.find((x) => x.label === row.district_name)
      );
    }
  };
  return (
    <div className="cv-main-container">
      {states && selectedDropdown1 === null && (
        <DropDown
          placeholder="State"
          data={states}
          onStateChange={(e) => {
            setCurrentState(e.value);
            setCurrentDistrict("");
            setSelectedDropdown2(null);
          }}
          isLoading={false}
          selectedItemDefault={selectedDropdown1}
        ></DropDown>
      )}
      {states && selectedDropdown1 && (
        <DropDown
          placeholder="State"
          data={states}
          onStateChange={(e) => {
            setCurrentState(e.value);
            setCurrentDistrict("");
          }}
          isLoading={false}
          selectedItemDefault={selectedDropdown1}
        ></DropDown>
      )}
      {districts && selectedDropdown2 === null && (
        <DropDown
          placeholder="Districts"
          data={districts}
          onStateChange={(e) => {
            setCurrentDistrict(e.value);
          }}
          isLoading={false}
          selectedItemDefault={selectedDropdown2}
        ></DropDown>
      )}
      {districts && selectedDropdown2 && (
        <DropDown
          placeholder="Districts"
          data={districts}
          onStateChange={(e) => {
            setCurrentDistrict(e.value);
          }}
          isLoading={false}
          selectedItemDefault={selectedDropdown2}
        ></DropDown>
      )}
      <div className="cv-row">
        {cards &&
          cards.map((item, i) => {
            if (i < 3) {
              return (
                <div className="cv-stats-card">
                  <StatsCard
                    card={item}
                    key={"card-" + i}
                    chart={lineCharts && i < 3 ? lineCharts[i] : null}
                  ></StatsCard>
                </div>
              );
            }
            return null;
          })}
      </div>
      <div className="cv-row">
        {cards &&
          cards.map((item, i) => {
            if (i >= 3 && i < 6) {
              return (
                <div className="cv-stats-card">
                  <StatsCard card={item} key={"card-" + i}></StatsCard>
                </div>
              );
            }
            return null;
          })}
      </div>
      <div className="cv-row">
        {cards &&
          cards.map((item, i) => {
            if (i >= 6 && i < 9) {
              return (
                <div className="cv-stats-card">
                  <StatsCard card={item} key={"card-" + i}></StatsCard>
                </div>
              );
            }
            return null;
          })}
      </div>
      <div className="cv-row">
        {cards &&
          cards.map((item, i) => {
            if (i >= 9 && i < 12) {
              return (
                <div className="cv-stats-card">
                  <StatsCard
                    card={item}
                    key={"card-" + i}
                    chart={lineCharts && i > 2 ? lineCharts[i - 6] : null}
                  ></StatsCard>
                </div>
              );
            }
            return null;
          })}
      </div>
      <div className="cv-row">
        {pieCharts &&
          pieCharts.map((item, index) => {
            return (
              <div
                className="cv-pie-chart-container-vaccine"
                key={"pie-container-" + index}
              >
                <Card>
                  {" "}
                  <CVPieChart
                    pieData={item.data}
                    title={item.title}
                    className="pie-card"
                    key={"pie-" + index}
                  ></CVPieChart>
                </Card>
              </div>
            );
          })}
      </div>
      {barChart && currentDistrict === "" && (
        <div className="bar-chart">
          <Card>
            <CVBarChart
              barChartData={barChart.barChartData}
              bars={barChart.bars}
            />
          </Card>
        </div>
      )}

      {vaccinationTable && currentDistrict === "" && (
        <div className="cv-stats-table">
          <Table
            theaders={[
              currentState === "" ? "State" : "District",
              "Total",
              "Partial vaccinated",
              "Today",
              "Totally vaccinated",
            ]}
            tbody={vaccinationTable}
            formatter={"hi"}
            key={"table-1"}
            onRowClick={(e) => handleTableRowClick(e)}
          ></Table>
        </div>
      )}
      <div className="cv-map-contaier">
        <Card>
          <Maps></Maps>
        </Card>
      </div>
    </div>
  );
};

const getTableData = (
  beneficiariesGroupBy,
  currentState = "",
  currentDistrict = ""
) => {
  let vaccinationTableData = [];
  beneficiariesGroupBy.forEach((item, i) => {
    if (currentState === "") {
      vaccinationTableData.push({
        state_name: item.district_id ? item.title : item.state_name,
        total: item.total,
        partial_vaccinated: item.partial_vaccinated,
        today: item.today,
        totally_vaccinated: item.totally_vaccinated,
      });
    } else if (currentDistrict === "") {
      vaccinationTableData.push({
        district_name: item.district_id ? item.title : item.state_name,
        total: item.total,
        partial_vaccinated: item.partial_vaccinated,
        today: item.today,
        totally_vaccinated: item.totally_vaccinated,
      });
    }
  });

  return vaccinationTableData;
};
const getBarChartsData = (beneficiariesGroupBy) => {
  let barChartData = [];
  let barConfig = [
    {
      dataKey: "Dose1",
      fill: "#109CF1",
    },
    {
      dataKey: "Dose2",
      fill: "#2ED47A",
    },
  ];
  beneficiariesGroupBy.forEach((item, i) => {
    barChartData.push({
      name: item.district_id ? item.title : item.state_name,
      Dose1: item.partial_vaccinated,
      Dose2: item.totally_vaccinated,
    });
  });

  return { barChartData: barChartData, bars: barConfig };
};

const getPieChartData = (vaccination, vaccinationByAge) => {
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

  return pieChartsData;
};

const getCardsData = (vaccination, vaccinationByAge) => {
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
        delta: vaccination?.today_female ? vaccination?.today_male : 0,
        cardClass: "cv-success",
      },
      {
        label: "Female",
        value: vaccination?.female,
        delta: vaccination?.today_female ? vaccination?.today_female : 0,
        cardClass: "cv-primary",
      },
      {
        label: "Others",
        value: vaccination?.others,
        delta: vaccination?.today_female ? vaccination?.today_others : 0,
        cardClass: "cv-info",
      },
      {
        label: "Age above 60",
        value: vaccinationByAge?.above_60,
        delta: 0,
        cardClass: "cv-success",
      },
      {
        label: "Age 45-60",
        value: vaccinationByAge?.vac_45_60,
        delta: 0,
        cardClass: "cv-primary",
      },
      {
        label: "Age 18-45",
        value: vaccinationByAge?.vac_18_45,
        delta: 0,
        cardClass: "cv-info",
      },
    ]
  );

  return cardsData;
};

const getLineChartData = (weeklyReport, weeklyVacAgeWiseReport) => {
  let lineChartsData = [];
  lineChartsData.push(
    ...[
      {
        name: "total",
        data: weeklyReport?.map((x) => {
          return { name: x.startdate, total: x.total };
        }),
        strokeColor: "#885AF8",
      },
      {
        name: "dose1",
        data: weeklyReport.map((x) => {
          return { name: x.startdate, dose1: x.dose1 };
        }),
        strokeColor: "#FFB946",
      },
      {
        name: "dose2",
        data: weeklyReport.map((x) => {
          return { name: x.startdate, dose2: x.dose2 };
        }),
        strokeColor: "#2ED47A",
      },

      {
        name: "above60",
        data: weeklyVacAgeWiseReport.map((x) => {
          return { name: x.startdate, above60: x.vac_60_above };
        }),
        strokeColor: "#2ED47A",
      },
      {
        name: "age45_60",
        data: weeklyVacAgeWiseReport.map((x) => {
          return { name: x.startdate, age45_60: x.vac_45_60 };
        }),
        strokeColor: "#109CF1",
      },
      {
        name: "age18_45",
        data: weeklyVacAgeWiseReport.map((x) => {
          return { name: x.startdate, age18_45: x.vac_18_45 };
        }),
        strokeColor: "#885AF8",
      },
    ]
  );
  return lineChartsData;
};

const getStatesFromRawData = (beneficiariesGroupBy, currentState) => {
  if (currentState === "") {
    return [{ title: "India", state_id: "" }, ...beneficiariesGroupBy].map(
      (item) => {
        return { value: item.state_id, label: item.title };
      }
    );
  } else {
    return [
      { title: beneficiariesGroupBy[0].state_name, district_id: "" },
      ...beneficiariesGroupBy,
    ].map((item) => {
      return { value: item.district_id, label: item.title };
    });
  }
};

export default Vaccination;
