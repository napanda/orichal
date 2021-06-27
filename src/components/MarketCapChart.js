import React from "react";
import { Line } from "react-chartjs-2";
import { optionsConfig } from "../config/chartConfigs";
import "chartjs-adapter-moment";

const MarketCapChart = ({ data }) => {
  // const marketCapData = data.map(_d => {
  //   return {
  //     t: Date.parse(_d[0]),
  //     y: _d[1]
  //   }
  // })

  return (
    <>
      <h3>BTC Market Cap</h3>
      <h5>Data from coingecko.</h5>
      <Line
        data={{
          datasets: [
            {
              label: `BTC Market Cap`,
              data: data,
              backgroundColor: "rgba(174, 305, 194, 0.2)",
              borderColor: "rgba(121,198,123,0.8)",
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

export default MarketCapChart;
