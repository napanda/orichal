import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  dataConfig,
  optionsConfig,
  optionsConfigHours,
} from "../config/chartConfigs";
import { Button, Row } from "react-bootstrap";
import "chartjs-adapter-moment";

const LineChart = ({ data }) => {
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");
  const FORMAT = {
    H24: "24h",
    D7: "7d",
    Y1: "1y",
  };

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case FORMAT.H24:
        return day;
      case FORMAT.D7:
        return week;
      case FORMAT.Y1:
        return year;
      default:
        return day;
    }
  };
  return (
    <>
      <Line
        data={dataConfig(detail, determineTimeFormat())}
        options={timeFormat === FORMAT.H24 ? optionsConfigHours : optionsConfig}
      />
      <Row>
        {Object.keys(FORMAT).map((_key, _idx) => {
          return (
            <Button
              key={_idx}
              variant={timeFormat === FORMAT[_key] ? "primary" : "secondary"}
              onClick={() => setTimeFormat(FORMAT[_key])}
            >
              {FORMAT[_key]}
            </Button>
          );
        })}
      </Row>
    </>
  );
};

export default LineChart;
