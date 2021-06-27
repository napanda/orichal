import React from "react";
import { Row } from "react-bootstrap";
import background from "./../img/CAKE.png";

const PancakePrice = ({ data }) => {
  return (
    <>
      <h3>Pancake Price</h3>
      <h5>Data from Pancake LP Smart Contract.</h5>
      <Row className="pancakePrice">
        <span style={{ backgroundImage: `url(${background})` }}></span>
        <span>{data ? `$${(data[1] / data[0]).toFixed(2)}` : "loading.."}</span>
      </Row>
      <Row>
        <h5>{data ? `Block: ${data[2]}` : ""}</h5>
      </Row>
    </>
  );
};
export default PancakePrice;
