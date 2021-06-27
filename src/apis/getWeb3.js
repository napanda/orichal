import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      const provider = new Web3.providers.HttpProvider(
        "https://bsc-dataseed1.binance.org:443"
      );
      const web3 = new Web3(provider);
      resolve(web3);
    });
  });

export default getWeb3;
