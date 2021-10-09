import React from "react";
import { Card } from "../card/card";
import "./table.scss";

export const Table = ({ theaders, tbody, formatter, onRowClick }) => {
  const handleClick =(item)=>{
    onRowClick(item);
  }
  return (
    <Card>
      <div className="cv-table">
        <table>
          <thead>
            <tr>
              {theaders.map((x, i) => {
                return <th key={i}>{x}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tbody?.map((x, i) => {
              return (
                <tr key={i} onClick={()=>handleClick(x)}>
                  {getValuesFromObject(x).map((y) => {
                    return <td>{y.toLocaleString(formatter)}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

const getValuesFromObject = (object) => {
  let values = [];
  Object.keys(object).forEach((x) => {
    values.push(object[x]);
  });

  return values;
};
