import axios from "axios";

export default axios.create({
  baseURL: "https://data.messari.io/api/v1",
  ///assets/btc/metrics/mcap-dom/time-series?start=2017-01-01&end=2021-06-24&timestamp-format=rfc3339
});
