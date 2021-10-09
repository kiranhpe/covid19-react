import axios from "axios";
import React, { useEffect, useState } from "react";
import { CVPieChart } from "../../components/chart/pie/pieChart";
import { StatsCard } from "../../components/stats-card/stats-card";
import { Table } from "../../components/table/table";
import "./vaccination.scss";
const Vaccination = () => {
  const [publicReports, setPublicReports] = useState(null);
  const [vaccinePublicReports, setVaccinePublicReports] = useState(null);
  const [cards, setCards] = useState(null);
  const [pieCharts, setPieCharts] = useState(null);
  const [lineCharts, setLineCharts] = useState(null);
  const [vaccinationTable, setVaccinationTable] = useState(null);

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
        const beneficiariesGroupBy = response?.getBeneficiariesGroupBy;

        setVaccinationTable(getTableData(beneficiariesGroupBy));
        setPieCharts(getPieChartData(vaccination, vaccinationByAge));
        setCards(getCardsData(vaccination, vaccinationByAge));
      });
    axios
      .get(
        "https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=&district_id=&date"
      )
      .then((response) => {
        const vaccinePublicReportsJson = response.data;
        setVaccinePublicReports(vaccinePublicReportsJson);
        const weeklyReport = response.data?.weeklyReport;
        const weeklyVacAgeWiseReport = response.data?.weeklyVacAgeWiseReport;
        
        setLineCharts(getLineChartData(weeklyReport, weeklyVacAgeWiseReport));
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
                  <StatsCard
                    card={item}
                    key={"card-" + i}
                    chart={lineCharts && i < 3 ? lineCharts[i] : null}
                  ></StatsCard>
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
                  <StatsCard card={item} key={"card-" + i}></StatsCard>
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
                  <StatsCard card={item} key={"card-" + i}></StatsCard>
                </div>
              );
          })}
      </div>
      <div className="cv-row">
        {cards &&
          cards.map((item, i) => {
            if (i >= 9 && i < 12)
              return (
                <div className="cv-stats-card">
                  <StatsCard
                    card={item}
                    key={"card-" + i}
                    chart={lineCharts && i > 2 ? lineCharts[i - 6] : null}
                  ></StatsCard>
                </div>
              );
          })}
      </div>
      <div className="cv-row">
        {pieCharts &&
          pieCharts.map((item, index) => {
            return (
              <div
                className="cv-pie-chart-container"
                key={"pie-container-" + index}
              >
                <CVPieChart
                  pieData={item.data}
                  title={item.title}
                  className="pie-card"
                  key={"pie-" + index}
                ></CVPieChart>
              </div>
            );
          })}
      </div>

      {vaccinationTable && (
        <div className="cv-stats-table">
          <Table
            theaders={[
              "State",
              "Total",
              "Partial vaccinated",
              "Today",
              "Totally vaccinated",
            ]}
            tbody={vaccinationTable}
            formatter={"hi"}
            key={"table-1"}
          ></Table>
        </div>
      )}
    </div>
  );
};

const getTableData = (beneficiariesGroupBy) =>{
  let vaccinationTableData =[];
  beneficiariesGroupBy.forEach((item, i) => {
    vaccinationTableData.push({
      state_name: item.state_name,
      total: item.total,
      partial_vaccinated: item.partial_vaccinated,
      today: item.today,
      totally_vaccinated: item.totally_vaccinated,
    });
  });

  return vaccinationTableData;
}

const getPieChartData = (vaccination, vaccinationByAge) => {
  let pieChartsData =[];
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
}

const getCardsData = (vaccination, vaccinationByAge)=> {
  let cardsData =[];
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
}

const getLineChartData=(weeklyReport, weeklyVacAgeWiseReport)=> {
  let lineChartsData =[]
  lineChartsData.push(
    ...[
      {
        name: "total",
        data: weeklyReport.map((x) => {
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
}

export default Vaccination;
