import React, { useState, useEffect } from "react";
import CoinList from "../components/CoinList";
import HistoryChart from "../components/HistoryChart";
import DominanceChart from "../components/DominanceChart";
import MarketCapChart from "../components/MarketCapChart";
import SBLIndexPrice from "../components/SBLIndexPrice";

import messari from "../apis/messari";
import coinGecko from "../apis/coinGecko";
import moment from "moment";

const CoinSummaryPage = () => {
  const [dominanceData, setDominanceData] = useState([]);
  const [marketCapData, setMarketCapData] = useState([]);
  const fetchData = async () => {
    const today = moment(new Date()).format("YYYY-MM-DD");
    const result = await messari.get(
      `assets/btc/metrics/mcap-dom/time-series?start=2017-01-01&end=${today}&timestamp-format=rfc3339`
    );

    setDominanceData(result.data.data.values);

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
  useEffect(() => {
    fetchData();
    return () => {
      setMarketCapData([]);
    };
  }, []);
  return (
    <div>
      <SBLIndexPrice />
      <HistoryChart />
      <DominanceChart data={dominanceData} />
      <MarketCapChart data={marketCapData} />
      <CoinList />
    </div>
  );
};

export default CoinSummaryPage;
