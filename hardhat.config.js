require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: `${process.env.CHAINSTACK_ENDPOINT}`,
      accounts: [process.env.YOUR_PRIVATE_KEY]
    },
  },
};
