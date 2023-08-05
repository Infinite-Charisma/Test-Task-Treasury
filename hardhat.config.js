require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",

  networks: {
    hardhat: {
      // url: "http://127.0.0.1:8545/",
      forking: {
        url: "https://mainnet.infura.io/v3/886780ecb0e74a5191b8fc1a507a9e5e",
        // url: 'https://polygon-mainnet.infura.io/v3/886780ecb0e74a5191b8fc1a507a9e5e'
      },
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/886780ecb0e74a5191b8fc1a507a9e5e`,
      accounts: {
        mnemonic:
          "step essence coconut base slice timber coast since lyrics slogan vocal dignity",
      },
    },
  },

  etherscan: {
    apiKey: `MT18645RJYR1U122XYG4ZKPHDA9TYJSV5X`,
  },
};
