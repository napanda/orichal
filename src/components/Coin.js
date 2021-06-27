import React from "react";
import { useHistory } from "react-router-dom";

const Coin = ({ coin }) => {
  const history = useHistory();

  function handleClick(url) {
    history.push(url);
  }
  return (
    <tr onClick={() => handleClick(`/coins/${coin.id}`)}>
      <td>
        <img src={coin.image} alt="" />
      </td>
      <td>
        <span className="name">{coin.name}</span>
      </td>
      <td>
        <span className="symbol">{coin.symbol.toUpperCase()}</span>
      </td>
      <td>
        <span className="price">
          ${coin.current_price ? coin.current_price.toLocaleString() : ""}
        </span>
      </td>
      <td>
        <span className="volume">
          {coin.total_volume ? coin.total_volume.toLocaleString() : ""}
        </span>
      </td>
      <td>
        <span
          className={coin.price_change_percentage_24h < 0 ? "red" : "green"}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
      </td>
      <td>
        <span className="marketCap">
          ${coin.market_cap ? coin.market_cap.toLocaleString() : ""}
        </span>
      </td>
    </tr>
  );
};

export default Coin;
