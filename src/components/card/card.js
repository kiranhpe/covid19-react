import React from "react";
import "./card.scss";

export const Card = (props) => {
  return (
    <div className="cv-card ">
      {props.children}
    </div>
  );
};
