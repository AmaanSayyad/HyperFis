// Script to deploy HyperFi contracts to Citrea testnet
const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying HyperFi contracts to Citrea testnet...");

  // Get the contract factories
  const HyperFiBitcoinDeFi = await ethers.getContractFactory("HyperFiBitcoinDeFi");
  const BitcoinYieldStrategies = await ethers.getContractFactory("BitcoinYieldStrategies");

  // For demonstration, we'll use a placeholder for the BTC native address
  // In a real deployment, this would be the actual BTC address on Citrea
  const btcNativeAddress = "0x1111111111111111111111111111111111111111";

  // Deploy the contracts
  console.log("Deploying HyperFiBitcoinDeFi...");
  const hyperFiBitcoinDeFi = await HyperFiBitcoinDeFi.deploy(btcNativeAddress);
  await hyperFiBitcoinDeFi.deployed();
  console.log("HyperFiBitcoinDeFi deployed to:", hyperFiBitcoinDeFi.address);

  console.log("Deploying BitcoinYieldStrategies...");
  const bitcoinYieldStrategies = await BitcoinYieldStrategies.deploy(btcNativeAddress);
  await bitcoinYieldStrategies.deployed();
  console.log("BitcoinYieldStrategies deployed to:", bitcoinYieldStrategies.address);

  // Add some example strategies
  console.log("Adding example strategies...");
  
  // Strategy Type: 0 = LENDING, 1 = LIQUIDITY_PROVISION, 2 = STAKING
  
  // Add Bitcoin Lending strategy
  await bitcoinYieldStrategies.addStrategy(
    "Bitcoin Lending",
    0, // LENDING
    "0x2222222222222222222222222222222222222222", // Placeholder contract
    ethers.utils.parseEther("0.05"), // 5% APY
    ethers.utils.parseEther("0.001") // 0.001 BTC minimum
  );
  
  // Add Bitcoin Liquidity Provision strategy
  await bitcoinYieldStrategies.addStrategy(
    "Bitcoin-ETH LP",
    1, // LIQUIDITY_PROVISION
    "0x3333333333333333333333333333333333333333", // Placeholder contract
    ethers.utils.parseEther("0.08"), // 8% APY
    ethers.utils.parseEther("0.005") // 0.005 BTC minimum
  );
  
  // Add Bitcoin Staking strategy
  await bitcoinYieldStrategies.addStrategy(
    "Bitcoin Staking",
    2, // STAKING
    "0x4444444444444444444444444444444444444444", // Placeholder contract
    ethers.utils.parseEther("0.03"), // 3% APY
    ethers.utils.parseEther("0.01") // 0.01 BTC minimum
  );

  console.log("Deployment and setup completed successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 