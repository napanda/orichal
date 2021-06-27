import React from "react";
import { Row } from "react-bootstrap";
import { hardData } from "../config/hardData";

const SBLIndexPrice = () => (
  <>
    <h3>Smart Beta Index Portfolio</h3>
    <Row className="sblIndex">
      <div>{hardData[hardData.length - 1].SBI.toFixed(2)}</div>
      <div
        className={
          hardData[hardData.length - 1].SBI -
            hardData[hardData.length - 2].SBI <
          0
            ? "red"
            : "green"
        }
      >
        {(
          hardData[hardData.length - 1].SBI - hardData[hardData.length - 2].SBI
        ).toFixed(2)}
        %
      </div>
    </Row>
  </>
);

export default SBLIndexPrice;
