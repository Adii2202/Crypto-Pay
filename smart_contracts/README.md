# Basic Sample Hardhat Project

This repository demonstrates a basic use case of Hardhat, a popular development environment for Ethereum smart contracts.

## Project Structure

The project includes the following components:

- **Contracts**: Sample Solidity contract (`SampleContract.sol`) located in the `contracts/` directory.

- **Tests**: Tests for the sample contract (`sample-contract-test.js`) located in the `test/` directory.

- **Scripts**: A sample script (`sample-script.js`) for deploying contracts located in the `scripts/` directory.

- **Tasks**: An example task implementation (`accounts.js`) that lists the available accounts.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

3. Try running some of the following tasks:

   - List available accounts:

     ```shell
     npx hardhat accounts
     ```

   - Compile contracts:

     ```shell
     npx hardhat compile
     ```

   - Clean build artifacts:

     ```shell
     npx hardhat clean
     ```

   - Run tests:

     ```shell
     npx hardhat test
     ```

   - Start a local development node:

     ```shell
     npx hardhat node
     ```

   - Execute the sample script:

     ```shell
     node scripts/sample-script.js
     ```

   - For more commands and options, refer to the Hardhat documentation:
     ```shell
     npx hardhat help
     ```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.
