import React from "react";
import { Line } from "react-chartjs-2";
import { optionsConfig } from "../config/chartConfigs";
import "chartjs-adapter-moment";

const DominanceChart = ({ data }) => {
  const dominanceData = data.map((_d) => {
    return {
      t: Date.parse(_d[0]),
      y: _d[1],
    };
  });

  return (
    <>
      <h3>BTC Dominance Index</h3>
      <h5>Data from messari.</h5>
      <Line
        data={{
          datasets: [
            {
              label: `BTC Dominance Index`,
              data: dominanceData,
              backgroundColor: "#5390d18c ",
              borderColor: "#5390d1",
              pointRadius: 0,
              fill: true,
            },
          ],
        }}
        options={optionsConfig}
      />
    </>
  );
};

export default DominanceChart;
