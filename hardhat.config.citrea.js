require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    // Citrea Testnet configuration
    citreaTestnet: {
      url: "https://rpc.testnet.citrea.xyz",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 2121337, // Citrea testnet chain ID
      gasPrice: 20000000000, // 20 gwei
    },
    // For local development
    hardhat: {
      chainId: 31337,
    },
    // For local testing with Citrea node
    citreaLocal: {
      url: "http://localhost:8545",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  etherscan: {
    // No etherscan API key needed for Citrea yet
    apiKey: {
      citreaTestnet: "no-api-key-required"
    },
    customChains: [
      {
        network: "citreaTestnet",
        chainId: 2121337,
        urls: {
          apiURL: "https://explorer.testnet.citrea.xyz/api",
          browserURL: "https://explorer.testnet.citrea.xyz"
        }
      }
    ]
  }
}; 