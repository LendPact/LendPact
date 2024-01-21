const { Network, Alchemy } = require('alchemy-sdk');

const settings = {
    apiKey: "e6SHCEdqjA7GcT9xCeH7kTh1TUmvLZhB",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);