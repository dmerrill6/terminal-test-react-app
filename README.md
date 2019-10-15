# Terminal Example Dapp (SDK)

This dapp connects to [Terminal](https://terminal.co) SDK to generate logs.

## Note

This is a quick example and contains some bad practices such as hardcoding the API Keys and other env dependent variables.

## How it works

1. In `index.html` we download Terminal's SDK and start the logging service by using a Terminal API Key.

2. In `getWeb3` (a util function that gets called whenever the React app needs a web3 instance), we instruct to fetch it from `window.terminal.ethereum`. `window.terminal.ethereum` is injected by the SDK, and it wraps the web3 instance provided by MetaMask so that it sends logs on every request.

## Installation

First ensure you are in a new and empty directory.

1. Compile and migrate the smart contracts (You need either a local ganache instance running or updating the config to point to a real chain. This assumes there's a local test chain running on port 7545).
    ```javascript
    truffle compile
    truffle migrate
    ```

2. In `client/public/index.html`, update `YOUR_API_KEY` with your Terminal API Key.

3. In the `client` directory, we run the React app. Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // in another terminal (i.e. not in the truffle develop prompt)
    cd client
    npm run start
    ```

4. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // inside the development console.
    test

    // outside the development console..
    truffle test
    ```

4. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```javascript
    // ensure you are inside the client directory when running this
    npm run test
    ```

5. To build the application for production, use the build script. A production build will be in the `client/build` folder.
    ```javascript
    // ensure you are inside the client directory when running this
    npm run build
    ```