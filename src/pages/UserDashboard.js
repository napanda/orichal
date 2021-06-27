import React, { useEffect } from "react";
import DoughnutChart from "../components/DoughnutChart";
import SBLIndexPrice from "../components/SBLIndexPrice";
import DownloadableFile from "../components/DownloadableFile";
import DescriptionText from "../components/DescriptionText";
import News from "../components/News";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const UserDashboard = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("login") !== "true") {
      history.push("/");
    }
  }, []);
  return (
    <div>
      <SBLIndexPrice />
      <Row xs={1} md={2}>
        <Col>
          <DoughnutChart />
        </Col>
        <Col>
          <News />
        </Col>
      </Row>

      <DownloadableFile />
      <DescriptionText />
    </div>
  );
};

export default UserDashboard;
