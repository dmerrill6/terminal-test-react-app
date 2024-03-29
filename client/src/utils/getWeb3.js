import Web3 from "web3";
import { TerminalHttpProvider, SourceType } from '@terminal-packages/sdk';

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.terminal.ethereum) {
        const web3 = new Web3(window.terminal.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const web3 = new Web3(
          new TerminalHttpProvider({
            host: "http://127.0.0.1:7545",
            apiKey: "YOUR_API_KEY",
            source: SourceType.MetaMask,
          }),
        );
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  });

  export default getWeb3;