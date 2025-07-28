# HyperFi Integration with Citrea

This document outlines how HyperFi leverages Citrea's zkEVM Layer 2 solution for Bitcoin to provide DeFi services directly to Bitcoin holders.

## Overview

HyperFi on Citrea enables Bitcoin holders to access sophisticated DeFi services without wrapped tokens or bridging to other chains. By using Citrea's zkEVM technology, HyperFi brings the full power of Ethereum's smart contract capabilities to Bitcoin while maintaining Bitcoin's security and decentralization properties.

## Technical Integration

### 1. Native Bitcoin Support

HyperFi interacts with Bitcoin natively on Citrea's zkEVM Layer 2:

- Users can deposit BTC directly into HyperFi without wrapping
- All operations use native BTC rather than wrapped tokens
- Withdrawals go directly back to Bitcoin addresses

### 2. Smart Contract Architecture

HyperFi's contracts on Citrea include:

- **HyperFiBitcoinDeFi.sol**: Core contract for managing Bitcoin DeFi protocols and APY tracking
- **BitcoinYieldStrategies.sol**: Implementation of various yield strategies for Bitcoin
- **APYAggregator.sol**: Modified to track Bitcoin DeFi protocols instead of general exchanges

### 3. Deployment Process

To deploy HyperFi on Citrea:

1. Configure Hardhat for Citrea's network using `hardhat.config.citrea.js`
2. Deploy contracts using `deploy_citrea.js`
3. Verify contracts on Citrea's block explorer

## Key Features Enabled by Citrea

### 1. Bitcoin-Native DeFi

- **Lending Markets**: Lend BTC and earn interest directly
- **Liquidity Provision**: Provide liquidity to BTC trading pairs
- **Yield Farming**: Earn rewards for participating in Bitcoin DeFi
- **Staking**: Stake BTC in various protocols

### 2. APY Comparison and Power Index

HyperFi's APY aggregator has been adapted to work with Bitcoin DeFi protocols on Citrea:

- Tracks and compares yields across multiple Bitcoin DeFi protocols
- Calculates a "Power Index" to help users identify the best opportunities
- Provides real-time data on protocol performance

### 3. Compound Calculator

The compound calculator has been updated to work with Bitcoin values:

- Projects BTC growth over time based on selected strategies
- Accounts for Bitcoin-specific factors in yield calculations
- Helps users visualize the potential growth of their BTC holdings

## User Experience Improvements

Citrea's zkEVM enables HyperFi to provide:

- **Fast Transactions**: Quick confirmation times compared to Bitcoin base layer
- **Low Fees**: Affordable transaction costs for DeFi operations
- **Familiar Tools**: Support for MetaMask and other Ethereum wallets
- **Seamless Experience**: Users interact with BTC directly without bridging complexity

## Security Considerations

HyperFi on Citrea inherits security from both Bitcoin and zkEVM technology:

- **Bitcoin Security**: Inherits the security guarantees of the Bitcoin blockchain
- **Zero-Knowledge Proofs**: Transactions are verified cryptographically
- **Smart Contract Security**: Standard Solidity security practices apply
- **Audits**: Contracts should undergo security audits before mainnet deployment

## Future Roadmap

HyperFi's integration with Citrea will expand to include:

1. **Bitcoin Options**: Implementing decentralized options markets for BTC
2. **Privacy Features**: Adding privacy-preserving transactions for Bitcoin DeFi
3. **Social Trading**: Enabling community-based investing for Bitcoin holders
4. **Cross-Chain Interoperability**: While maintaining Bitcoin as the primary asset

## Getting Started for Developers

To start developing with HyperFi on Citrea:

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables in `.env`
4. Compile contracts: `npx hardhat compile --config hardhat.config.citrea.js`
5. Deploy to testnet: `npx hardhat run scripts/deploy_citrea.js --network citreaTestnet --config hardhat.config.citrea.js`

## Resources

- [Citrea Documentation](https://docs.citrea.xyz/)
- [Citrea RPC Endpoint](https://rpc.testnet.citrea.xyz)
- [Citrea Testnet Faucet](https://citrea.xyz/faucet)
- [HyperFi Documentation](https://hyperfi.xyz/docs) 