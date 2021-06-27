import React from "react";
import {Row} from 'react-bootstrap';

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <>
         <Row>
            <div>
              <span>Market Cap</span>
              <span>${data.market_cap ? data.market_cap.toLocaleString() : ''}</span>
            </div>
            <div>
              <span>
                Total Supply
              </span>
              <span>{data.total_supply ? data.total_supply.toLocaleString() : ''}</span>
            </div>
            <div>
              <span>24h High</span>
              <span>${data.high_24h ? data.high_24h.toLocaleString() : ''}</span>
            </div>
          </Row>
          <Row>
            <div>
              <span>Volume(24H)</span>
              <span>{data.total_volume ? data.total_volume.toLocaleString() : ''}</span>
            </div>
            <div>
              <span>
                Circulating Supply
              </span>
              <span>{data.circulating_supply ? data.circulating_supply.toLocaleString() : ''}</span>
            </div>
            <div>
              <span>24h Low</span>
              <span>${data.low_24h ? data.low_24h.toLocaleString() : ''}</span>
            </div>
          </Row>
        </>
      );
    }
  };

  return <div className="coinData">{renderData()}</div>;
};

export default CoinData;
