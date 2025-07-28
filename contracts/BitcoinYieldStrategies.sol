// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title BitcoinYieldStrategies
 * @dev A contract for implementing various Bitcoin yield strategies on Citrea's zkEVM
 * This contract provides different yield-generating strategies for Bitcoin holders
 */
contract BitcoinYieldStrategies {
    // ============ State Variables ============
    
    address public owner;
    address public btcNativeAddress; // Address of native BTC on Citrea zkEVM
    
    // Strategy types
    enum StrategyType { LENDING, LIQUIDITY_PROVISION, STAKING }
    
    // Strategy data structure
    struct Strategy {
        string name;
        StrategyType strategyType;
        address strategyContract;
        uint256 apy;
        uint256 tvl;
        uint256 minimumDeposit;
        bool active;
    }
    
    // Mapping from strategy ID to Strategy
    mapping(uint256 => Strategy) public strategies;
    
    // Total number of strategies
    uint256 public strategyCount;
    
    // User deposits in each strategy
    mapping(address => mapping(uint256 => uint256)) public userStrategyDeposits;
    
    // Events
    event StrategyAdded(uint256 indexed strategyId, string name, StrategyType strategyType);
    event StrategyUpdated(uint256 indexed strategyId, uint256 apy, uint256 tvl);
    event StrategyDeposit(address indexed user, uint256 indexed strategyId, uint256 amount);
    event StrategyWithdraw(address indexed user, uint256 indexed strategyId, uint256 amount);
    event RewardsHarvested(address indexed user, uint256 indexed strategyId, uint256 amount);
    
    // ============ Modifiers ============
    
    modifier onlyOwner() {
        require(msg.sender == owner, "BitcoinYieldStrategies: caller is not the owner");
        _;
    }
    
    modifier strategyExists(uint256 strategyId) {
        require(strategyId < strategyCount, "Strategy does not exist");
        _;
    }
    
    modifier activeStrategy(uint256 strategyId) {
        require(strategies[strategyId].active, "Strategy is not active");
        _;
    }
    
    // ============ Constructor ============
    
    constructor(address _btcNativeAddress) {
        owner = msg.sender;
        btcNativeAddress = _btcNativeAddress;
    }
    
    // ============ Admin Functions ============
    
    /**
     * @dev Add a new yield strategy
     * @param name Name of the strategy
     * @param strategyType Type of the strategy (LENDING, LIQUIDITY_PROVISION, STAKING)
     * @param strategyContract Address of the contract implementing the strategy
     * @param apy Initial APY of the strategy
     * @param minimumDeposit Minimum amount required to deposit
     */
    function addStrategy(
        string memory name,
        StrategyType strategyType,
        address strategyContract,
        uint256 apy,
        uint256 minimumDeposit
    ) external onlyOwner {
        uint256 strategyId = strategyCount;
        
        strategies[strategyId] = Strategy({
            name: name,
            strategyType: strategyType,
            strategyContract: strategyContract,
            apy: apy,
            tvl: 0,
            minimumDeposit: minimumDeposit,
            active: true
        });
        
        strategyCount++;
        
        emit StrategyAdded(strategyId, name, strategyType);
    }
    
    /**
     * @dev Update strategy APY and TVL
     * @param strategyId ID of the strategy to update
     * @param apy New APY value
     * @param tvl New TVL value
     */
    function updateStrategyMetrics(
        uint256 strategyId,
        uint256 apy,
        uint256 tvl
    ) external onlyOwner strategyExists(strategyId) {
        Strategy storage strategy = strategies[strategyId];
        strategy.apy = apy;
        strategy.tvl = tvl;
        
        emit StrategyUpdated(strategyId, apy, tvl);
    }
    
    /**
     * @dev Activate or deactivate a strategy
     * @param strategyId ID of the strategy
     * @param active Whether the strategy should be active
     */
    function setStrategyActive(uint256 strategyId, bool active) external onlyOwner strategyExists(strategyId) {
        strategies[strategyId].active = active;
    }
    
    // ============ View Functions ============
    
    /**
     * @dev Get all active strategies
     * @return Array of active strategies
     */
    function getActiveStrategies() external view returns (Strategy[] memory) {
        uint256 activeCount = 0;
        
        // Count active strategies
        for (uint256 i = 0; i < strategyCount; i++) {
            if (strategies[i].active) {
                activeCount++;
            }
        }
        
        // Create result array
        Strategy[] memory result = new Strategy[](activeCount);
        uint256 resultIndex = 0;
        
        // Fill result array
        for (uint256 i = 0; i < strategyCount; i++) {
            if (strategies[i].active) {
                result[resultIndex] = strategies[i];
                resultIndex++;
            }
        }
        
        return result;
    }
    
    /**
     * @dev Get user deposits across all strategies
     * @param user Address of the user
     * @return strategyIds Array of strategy IDs
     * @return amounts Array of deposit amounts
     */
    function getUserDeposits(address user) external view returns (uint256[] memory, uint256[] memory) {
        uint256[] memory strategyIds = new uint256[](strategyCount);
        uint256[] memory amounts = new uint256[](strategyCount);
        
        for (uint256 i = 0; i < strategyCount; i++) {
            strategyIds[i] = i;
            amounts[i] = userStrategyDeposits[user][i];
        }
        
        return (strategyIds, amounts);
    }
    
    /**
     * @dev Calculate potential earnings for a strategy over time
     * @param strategyId ID of the strategy
     * @param amount Amount to deposit
     * @param durationDays Duration in days
     * @return Estimated future value
     */
    function calculatePotentialEarnings(
        uint256 strategyId,
        uint256 amount,
        uint256 durationDays
    ) external view strategyExists(strategyId) returns (uint256) {
        Strategy memory strategy = strategies[strategyId];
        
        // Daily rate approximation
        uint256 dailyRate = strategy.apy / 365 / 1e18;
        
        // Calculate compound interest
        uint256 futureValue = amount;
        for (uint256 i = 0; i < durationDays; i++) {
            futureValue = futureValue + (futureValue * dailyRate) / 1e18;
        }
        
        return futureValue;
    }
    
    // ============ User Functions ============
    
    /**
     * @dev Deposit BTC into a yield strategy
     * @param strategyId ID of the strategy
     * @param amount Amount to deposit
     */
    function deposit(uint256 strategyId, uint256 amount) external strategyExists(strategyId) activeStrategy(strategyId) {
        Strategy memory strategy = strategies[strategyId];
        
        require(amount >= strategy.minimumDeposit, "Amount below minimum deposit");
        
        // In a real implementation, this would transfer BTC from user to strategy contract
        // For now, we'll just update the mappings
        
        userStrategyDeposits[msg.sender][strategyId] += amount;
        strategies[strategyId].tvl += amount;
        
        emit StrategyDeposit(msg.sender, strategyId, amount);
    }
    
    /**
     * @dev Withdraw BTC from a yield strategy
     * @param strategyId ID of the strategy
     * @param amount Amount to withdraw
     */
    function withdraw(uint256 strategyId, uint256 amount) external strategyExists(strategyId) {
        require(userStrategyDeposits[msg.sender][strategyId] >= amount, "Insufficient balance");
        
        // In a real implementation, this would transfer BTC from strategy contract to user
        // For now, we'll just update the mappings
        
        userStrategyDeposits[msg.sender][strategyId] -= amount;
        strategies[strategyId].tvl -= amount;
        
        emit StrategyWithdraw(msg.sender, strategyId, amount);
    }
    
    /**
     * @dev Harvest rewards from a yield strategy
     * @param strategyId ID of the strategy
     */
    function harvestRewards(uint256 strategyId) external strategyExists(strategyId) activeStrategy(strategyId) {
        uint256 userDeposit = userStrategyDeposits[msg.sender][strategyId];
        require(userDeposit > 0, "No deposits in this strategy");
        
        // In a real implementation, this would calculate actual rewards based on the strategy
        // For this example, we'll simulate a simple reward calculation
        
        Strategy memory strategy = strategies[strategyId];
        
        // Calculate rewards since last harvest (simplified)
        // Assume rewards are 1% of deposit for demonstration
        uint256 rewards = (userDeposit * 1e16) / 1e18;
        
        // In a real implementation, this would transfer rewards to the user
        
        emit RewardsHarvested(msg.sender, strategyId, rewards);
    }
    
    /**
     * @dev Compound rewards back into the strategy
     * @param strategyId ID of the strategy
     */
    function compoundRewards(uint256 strategyId) external strategyExists(strategyId) activeStrategy(strategyId) {
        uint256 userDeposit = userStrategyDeposits[msg.sender][strategyId];
        require(userDeposit > 0, "No deposits in this strategy");
        
        // In a real implementation, this would calculate actual rewards and reinvest them
        // For this example, we'll simulate a simple reward calculation and compounding
        
        Strategy memory strategy = strategies[strategyId];
        
        // Calculate rewards (simplified)
        // Assume rewards are 1% of deposit for demonstration
        uint256 rewards = (userDeposit * 1e16) / 1e18;
        
        // Add rewards to user's deposit and strategy TVL
        userStrategyDeposits[msg.sender][strategyId] += rewards;
        strategies[strategyId].tvl += rewards;
        
        emit RewardsHarvested(msg.sender, strategyId, rewards);
        emit StrategyDeposit(msg.sender, strategyId, rewards);
    }
} 