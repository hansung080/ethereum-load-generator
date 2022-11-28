module.exports = {
  networks: {
    ethereum_dev: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "10"
    },
    quorum_ibft: {
      host: "127.0.0.1",
      port: 20500,
      network_id: "20",
      gasPrice: 0,
      gas: 4500000,
      type: "quorum"      
    },
    quorum_raft: {
      host: "127.0.0.1",
      port: 21200,
      network_id: "21",
      gasPrice: 0,
      gas: 4500000,
      type: "quorum"
    }
  },
  compilers: {
    solc: {
      version: "0.7.1"
    }
  }
};
