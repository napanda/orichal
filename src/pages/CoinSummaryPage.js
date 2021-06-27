import React, { useState, useEffect } from "react";
import CoinList from "../components/CoinList";
import HistoryChart from "../components/HistoryChart";
import DominanceChart from "../components/DominanceChart";
import MarketCapChart from "../components/MarketCapChart";
import SBLIndexPrice from "../components/SBLIndexPrice";
import PancakePrice from "../components/PancakePrice";
import messari from "../apis/messari";
import coinGecko from "../apis/coinGecko";
import moment from "moment";
import getWeb3 from "../apis/getWeb3";
import { abi, address } from "../contracts/PancakeLP";

const CoinSummaryPage = () => {
  const [dominanceData, setDominanceData] = useState([]);
  const [marketCapData, setMarketCapData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [pancakeData, setPancakeData] = useState(null);

  useEffect(() => {
    const fetchChainData = async () => {
      if (!window.contract) {
        try {
          // Get network provider and web3 instance.
          const web3 = await getWeb3();

          const accounts = await web3.eth.getAccounts();
          const contract = new web3.eth.Contract(abi, address);
          const reserves = await contract.methods.getReserves().call();
          console.log(reserves);
          if (reserves) setPancakeData(reserves);

          window.accounts = accounts;
          window.contract = contract;

          setWeb3(web3);
          setAccounts(accounts);
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
        if (reserves) setPancakeData(reserves);
      }
    };
    const fetchData = async () => {
      setIsLoading(true);

      const today = moment(new Date()).format("YYYY-MM-DD");
      // const result = await Promise.resolve(
      //   messari.get(
      //     `assets/btc/metrics/mcap-dom/time-series?start=2017-01-01&end=${today}&timestamp-format=rfc3339`
      //   )
      // );
      const result = await messari.get(
        `assets/btc/metrics/mcap-dom/time-series?start=2017-01-01&end=${today}&timestamp-format=rfc3339`
      );

      setDominanceData(result.data.data.values);
      setIsLoading(false);

      //https://api.blockchain.info/charts/market-cap?start=2017-01-01
      //https://app.cryptosheets.com/#/browse/
      const marketCapResult = await coinGecko.get(
        "coins/bitcoin/market_chart?vs_currency=usd&days=365",
        {
          params: {
            vs_currency: "usd",
            days: 365,
          },
        }
      );
      setMarketCapData(marketCapResult.data.market_caps);
    };

    fetchData();
    fetchChainData();
  }, []);
  return (
    <div>
      <SBLIndexPrice />
      <HistoryChart />
      <DominanceChart data={dominanceData} />
      <MarketCapChart data={marketCapData} />

      <CoinList />
      <PancakePrice data={pancakeData} />
    </div>
  );
};

export default CoinSummaryPage;
