import React from "react";
import './table.scss';

export const Table = ({ theaders, tbody, formatter }) => {
  return ( 
    <div className="cv-table">
      <table>
        <thead>
          <tr>
            {theaders.map((x,i) => {
              return <th key={i}>{x}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tbody?.map((x,i) => {
            return (
              <tr key={i}>
                {getValuesFromObject(x).map((y) => {
                  return <td>{y.toLocaleString(formatter)}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const getValuesFromObject = (object) => {
  let values = [];
  Object.keys(object).forEach((x) => {
    values.push(object[x]);
  });

  return values;
};
