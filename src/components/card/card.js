import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Chart } from "../chart/chart";
import "./card.scss";

export const Card = ({ card, chart }) => {
  return (
    <div className={"cv-card " + card.cardClass}>
      <p className="cv-label">{card?.label}</p>
      <div className="cv-count-container">
        <p className="cv-count">{card?.value?.toLocaleString("hi")}</p>
        {card?.delta !== 0 && (
          <p className="cv-delta">
            <FaArrowUp className="cv-icon" />
            {card?.delta?.toLocaleString("hi")}
          </p>
        )}
      </div>

      <div className="cv-chart-container">
        <Chart chart={chart}></Chart>
      </div>
    </div>
  );
};
