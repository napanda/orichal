import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { optionsConfig } from "../config/chartConfigs";
import "chartjs-adapter-moment";
import { hardData } from "../config/hardData";
import { Button, Row } from "react-bootstrap";

const HistoryChart = () => {
  const hardDataLabel = [
    "SBI",
    "TOP 10 Index",
    "BTC/ETH 5050 Index",
    "BTC Index",
    "ETH Index",
  ];
  const [hardDataSelect, setHardDataSelect] = useState([
    true,
    true,
    true,
    true,
    true,
  ]);
  const defaultDataSets = [
    {
      label: "SBI",
      data: hardData.map((_hd) => {
        const obj = {};
        obj.t = new Date(_hd.date);
        obj.y = _hd.SBI;
        return obj;
      }),
      backgroundColor: "rgba(174, 305, 194, 0.5)",
      borderColor: "rgba(121,198,123,0.8)",
      pointRadius: 0,
      // fill: true ,
    },
    {
      label: "TOP10",
      data: hardData.map((_hd) => {
        const obj = {};
        obj.t = new Date(_hd.date);
        obj.y = _hd.TOP10;
        return obj;
      }),
      backgroundColor: "#ead013cf",
      borderColor: "#bdac31cf",
      pointRadius: 0,
      // fill: true ,
    },
    {
      label: "BTCETH5050_index",
      data: hardData.map((_hd) => {
        const obj = {};
        obj.t = new Date(_hd.date);
        obj.y = _hd.BTCETH5050_index;
        return obj;
      }),
      backgroundColor: "#ff5b408c",
      borderColor: "#ff5b40cc",
      pointRadius: 0,
      // fill: true ,
    },
    {
      label: "BTC_index",
      data: hardData.map((_hd) => {
        const obj = {};
        obj.t = new Date(_hd.date);
        obj.y = _hd.BTC_index;
        return obj;
      }),
      backgroundColor: "#8cc4ff8a ",
      borderColor: "#5390d1",
      pointRadius: 0,
      // fill: true ,
    },
    {
      label: "ETH_index",
      data: hardData.map((_hd) => {
        const obj = {};
        obj.t = new Date(_hd.date);
        obj.y = _hd.ETH_index;
        return obj;
      }),
      backgroundColor: "#ff38e585",
      borderColor: "#ff38e5cf",
      pointRadius: 0,
      // fill: true ,
    },
  ];
  const [filterDataSets, setFilterDataSets] = useState(defaultDataSets);

  const selectData = (_idx) => {
    let _hardDataSelect = [...hardDataSelect];
    _hardDataSelect[_idx] = !_hardDataSelect[_idx];
    setHardDataSelect(_hardDataSelect);
    let _filterDataSets = [];
    for (let i = 0; i < _hardDataSelect.length; i++) {
      if (_hardDataSelect[i]) _filterDataSets.push(defaultDataSets[i]);
    }
    setFilterDataSets(_filterDataSets);
  };

  return (
    <>
      <h3>Historical Price Chart (Daily Price Index)</h3>
      <Line
        data={{
          datasets: filterDataSets || defaultDataSets,
        }}
        options={optionsConfig}
      />
      <Row className="buttonRow">
        <div>Filter:</div>
        {hardDataSelect.map((_, _idx) => {
          return (
            <Button
              key={_idx}
              variant={hardDataSelect[_idx] ? "primary" : "secondary"}
              onClick={() => selectData(_idx)}
            >
              {hardDataLabel[_idx]}
            </Button>
          );
        })}
      </Row>
    </>
  );
};

export default HistoryChart;
