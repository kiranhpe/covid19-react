import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { Chart } from '../chart/chart';
import './card.scss';

export const Card = ({card, chart}) => {
    return (
        <div className={"cv-card " + card.cardClass}>
        <span className="cv-label">{card?.label}</span>
        <span className="cv-count">
          {card?.value?.toLocaleString()}
          {card?.delta !== 0 && (
            <span className="cv-delta">
              <FaArrowUp className="cv-icon" />
              {card?.delta?.toLocaleString()}
            </span>
          )}
        </span>
        <div className="cv-chart-container">
          <Chart chart={chart}></Chart>
        </div>
      </div>
    )
}
