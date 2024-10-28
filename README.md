# SimpleStorage Project (Hardhat)

## Overview

This project is a Solidity-based smart contract that allows users to store, update, and retrieve a favorite number, as well as add people with their respective favorite numbers. It demonstrates basic functionality for reading and updating values on the blockchain and includes a deployment script and tests written in JavaScript.

## Project Structure

-   **SimpleStorage.sol**: Contains the `SimpleStorage` smart contract logic.
-   **deploy.js**: Script for deploying the contract to a blockchain network.
-   **test-deploy.js**: Contains unit tests for verifying contract functionality.

## Prerequisites

-   **Node.js**: Ensure Node.js is installed (version 14 or higher is recommended).
-   **Hardhat**: This project uses Hardhat for testing, deployment, and network configuration. Install it by running:
    ```bash
    npm install --save-dev hardhat
    ```

## installation

1. clone the repository
    ```bash
    git clone github.com/jumpupjoran/Hardhat-Simple-Storage
    ```
2. install dependencies :
    ```bash
    npm install
    ```

## Smart Contract: `SimpleStorage.sol`

The `SimpleStorage` contract provides functions to:

-   Store a favorite number.
-   Retrieve the stored number.
-   Add people with their favorite numbers.

### Contract Functions

-   **store(uint256 \_favoriteNumber)**: Stores a new favorite number.
-   **retrieve()**: Retrieves the stored favorite number.
-   **addPerson(string memory \_name, uint256 \_favoriteNumber)**: Adds a person with their favorite number to the `people` array.

## Deployment: `deploy.js`

This script deploys the `SimpleStorage` contract to a blockchain network. Key functionality includes:

-   **Deployment**: Deploys the contract using Hardhat's `ethers` package.
-   **Verification**: Automatically verifies the contract on Etherscan if deployed on a testnet (e.g., Sepolia) with an Etherscan API key.

### Usage

To deploy the contract, run:

```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

### Environment Variables

To enable Etherscan verification, set up a .env file with:

```bash
ETHERSCAN_API_KEY=<Your-Etherscan-API-Key>
```

## Testing: `test-deploy.js`

Tests for the `SimpleStorage` contract are written using Chai assertions within Hardhat’s testing framework. The tests cover:

1. **Initial State**: Verifies that the favorite number is initially `0`.
2. **Updating Favorite Number**: Tests the `store` function to ensure the favorite number updates correctly.
3. **Adding a Person**: Tests the `addPerson` function to confirm people are added with correct names and numbers.

You can copy this Markdown text directly into your README file.

### Running Tests

Run the tests with :

```bash
npx hardhat test
```

## License

This project is open-source and available under the MIT License
