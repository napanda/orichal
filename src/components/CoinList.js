import React, { useEffect, useState } from "react";
import coinGecko from "../apis/coinGecko";
import Coin from "./Coin";
import { Table } from "react-bootstrap";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
          sparkline: "false",
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div id="coinList">
      <h3>Top 10 Coin List</h3>
      <h5>Data from coingecko.</h5>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Table responsive>
          <thead>
            <tr>
              <td></td>
              <td>Coin Name</td>
              <td>Symbol</td>
              <td>Price</td>
              <td>Volume</td>
              <td>24h Change</td>
              <td>Market Cap</td>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => {
              return <Coin key={coin.id} coin={coin} />;
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default CoinList;
