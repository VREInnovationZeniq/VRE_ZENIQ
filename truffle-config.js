npm install truffle-plugin-verify eth-gas-reporter

const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraKey = "YOUR_INFURA_KEY";
const mnemonic = "YOUR_MNEMONIC";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

 const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "YOUR_INFURA_KEY";
const mnemonic = "YOUR_MNEMONIC";

module.exports = {
  plugins: [
    'truffle-plugin-verify',
    'eth-gas-reporter'
  ],

  api_keys: {
    etherscan: 'YOUR_ETHERSCAN_API_KEY'
  },

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraKey}`),
      network_id: 1,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    }
  },

  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    },
  },

  ethGasReporter: {
    currency: 'USD',
    gasPrice: 21
  }

};


require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  plugins: [
    'truffle-plugin-verify',
    'eth-gas-reporter'
  ],

  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    ropsten: {
      provider: () => new HDWalletProvider({
        mnemonic: process.env.MNEMONIC,
        providerOrUrl: `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`,
        numberOfAddresses: 10,
        shareNonce: true,
        derivationPath: "m/44'/60'/0'/0/",
        pollingInterval: 8000000
      }),
      network_id: 3,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    }
  },

  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    },
  },

  ethGasReporter: {
    currency: 'USD',
    gasPrice: 21
  },

  mocha: {
    enableTimeouts: false,
    before_timeout: 120000 // Here is 2min but can be whatever timeout is suitable for you.
  }
};


MNEMONIC="your mnemonic here"
INFURA_KEY="your infura key here"
ETHERSCAN_API_KEY="your etherscan API key here"
