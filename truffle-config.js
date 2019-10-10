const path = require("path");
const { TerminalHttpProvider } = require('@terminal-packages/sdk');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    terminal: {
      network_id: 5777,
      provider: () => new TerminalHttpProvider({
        host: "http://127.0.0.1:8545",
        apiKey: "tXlcZoc7pbJU/OhcUxINOA==",
        source: "Metamask",
      })
    },
  },
};
