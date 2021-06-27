import React, { useEffect, useState } from "react";
import DoughnutChart from "../components/DoughnutChart";
import SBLIndexPrice from "../components/SBLIndexPrice";
import DownloadableFile from "../components/DownloadableFile";
import DescriptionText from "../components/DescriptionText";
import PancakePrice from "../components/PancakePrice";
import News from "../components/News";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import getWeb3 from "../apis/getWeb3";
import { abi, address } from "../contracts/PancakeLP";
import Web3 from "web3";

const UserDashboard = () => {
  const history = useHistory();
  const [pancakeData, setPancakeData] = useState(null);
  const fetchChainData = async () => {
    if (!window.contract) {
      try {
        // Get network provider and web3 instance.
        // const web3 = await getWeb3();
        const provider = new Web3.providers.HttpProvider(
          "https://bsc-dataseed1.binance.org:443"
        );
        const web3 = new Web3(provider);

        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(abi, address);
        const reserves = await contract.methods.getReserves().call();
        console.log(reserves);
        if (reserves) setPancakeData(reserves);

        window.accounts = accounts;
        window.contract = contract;
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    } else {
      const contract = window.contract;
      const reserves = await contract.methods.getReserves().call();
      console.log(reserves);
      if (reserves) setPancakeData(reserves);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("login") !== "true") {
      history.push("/");
    }
    fetchChainData();
    return () => {
      // setPancakeData([]);
    };
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
      <PancakePrice data={pancakeData} />
    </div>
  );
};

export default UserDashboard;
