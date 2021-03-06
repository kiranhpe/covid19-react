import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Card } from "../card/card";
import { CVLineChart } from "../chart/line/lineChart";
import "./stats-card.scss";

export const StatsCard = ({ card, chart }) => {
  return (
    <Card>
      <div className={"cv-stats-card " + card.cardClass}>
        <p className="cv-label">{card?.label}</p>
        <div className="cv-count-container">
          <p className="cv-count">{card?.value?.toLocaleString("hi")}</p>
          {card?.delta > 0 && (
            <p className="cv-delta">
              <FaArrowUp className="cv-icon" />
              {card?.delta?.toLocaleString("hi")}
            </p>
          )}
        </div>
        {chart && (
          <div className="cv-chart-container">
            <CVLineChart chart={chart}></CVLineChart>
          </div>
        )}
      </div>
    </Card>
  );
};
