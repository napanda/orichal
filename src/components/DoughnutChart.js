import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["BTC", "ETH", "Cash", "BCH", "LTC"],
  datasets: [
    {
      label: 'Allocation Breakdown" "as of June 13 2021',
      data: [0.587522, 0.243329, 0.15, 0.009608, 0.00954],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.7)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <h3>Allocation Breakdown as of June 13 2021</h3>
    <Doughnut data={data} className="doughnut" />
  </>
);

export default DoughnutChart;
