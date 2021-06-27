import React from "react";

const News = () => (
  <>
    <h3>News</h3>
    <div className="newsRow">
      <div className="tag">
        <span>Bitcoin Hashrate</span>
      </div>
      <div className="title">
        Market Wrap: Bitcoin Declines Into the Weekend, as Volatile Month
        Continues
      </div>
      <div className="desc">
        <span>Frances Yue</span>
        <span className="date">Jun 26, 2021</span>
      </div>
    </div>
    <div className="newsRow">
      <div className="tag">
        <span>Ethereum</span>
      </div>
      <div className="title">
        This Token Could Bridge the Incentive Gap Between Ethereum Miners and
        Ethereum Users
      </div>
      <div className="desc">
        <span>Benjamin Powers</span>
        <span className="date">Jun 26, 2021</span>
      </div>
    </div>
    <div className="newsRow">
      <div className="tag">
        <span>Derivatives</span>
      </div>
      <div className="title">
        How One Fund Used the Carry Trade to Beat Bitcoin
      </div>
      <div className="desc">
        <span>Omkar Godbole</span>
        <span className="date">Jun 26, 2021</span>
      </div>
    </div>
  </>
);

export default News;
