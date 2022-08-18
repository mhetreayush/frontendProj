import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
  
];

export const options = {
  curveType: "function",
  vAxis: {
    textPosition: 'none',
    gridlines: {
        color: 'transparent'
        
    },
    legend :'none',
    backgroundColor:'#F2F3FA',
    is3D: true,
}

};

export default function Graph() {
  return (
    <div className="flex justify-center items-center w-full h-full p-2 rounded-md">

    <Chart
      chartType="LineChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
      />
      </div>
  );
}
