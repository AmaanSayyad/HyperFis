// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title HyperFiBitcoinDeFi
 * @dev A DeFi protocol built on Citrea's zkEVM Layer 2 for Bitcoin
 * This contract enables Bitcoin holders to access DeFi services natively
 * without wrapped tokens, leveraging Citrea's zkEVM technology.
 */
contract HyperFiBitcoinDeFi {
    // ============ State Variables ============
    
    address public owner;
    address public btcNativeAddress; // Address of native BTC on Citrea zkEVM
    
    // Protocol addresses for Bitcoin DeFi on Citrea
    mapping(string => address) public protocols;
    
    // APY data structure
    struct ProtocolAPY {
        string protocolName;
        uint256 apy;
        uint256 powerIndex;
        uint256 tvl;
        uint256 timestamp;
    }
    
    // Mapping to store APY data for each protocol
    mapping(string => ProtocolAPY) public protocolAPYs;
    
    // Array to store all protocol names for iteration
    string[] public protocolList;
    
    // User deposit tracking
    mapping(address => mapping(string => uint256)) public userDeposits;
    
    // Events
    event Deposit(address indexed user, string protocol, uint256 amount, uint256 timestamp);
    event Withdraw(address indexed user, string protocol, uint256 amount, uint256 timestamp);
    event APYUpdated(string protocol, uint256 apy, uint256 powerIndex, uint256 timestamp);
    event ProtocolAdded(string protocol, address contractAddress);
    
    // ============ Modifiers ============
    
    modifier onlyOwner() {
        require(msg.sender == owner, "HyperFiBitcoinDeFi: caller is not the owner");
        _;
    }
    
    // ============ Constructor ============
    
    constructor(address _btcNativeAddress) {
        owner = msg.sender;
        btcNativeAddress = _btcNativeAddress;
    }
    
    // ============ Admin Functions ============
    
    /**
     * @dev Add or update a Bitcoin DeFi protocol
     * @param protocolName Name of the protocol
     * @param protocolAddress Contract address of the protocol on Citrea
     */
    function addProtocol(string memory protocolName, address protocolAddress) external onlyOwner {
        bool exists = false;
        
        for (uint i = 0; i < protocolList.length; i++) {
            if (keccak256(abi.encodePacked(protocolList[i])) == keccak256(abi.encodePacked(protocolName))) {
                exists = true;
                break;
            }
        }
        
        if (!exists) {
            protocolList.push(protocolName);
        }
        
        protocols[protocolName] = protocolAddress;
        emit ProtocolAdded(protocolName, protocolAddress);
    }
    
    /**
     * @dev Update APY information for a protocol
     * @param protocolName Name of the protocol
     * @param apy Current APY (scaled by 10^18)
     * @param tvl Total value locked in the protocol
     */
    function updateProtocolAPY(string memory protocolName, uint256 apy, uint256 tvl) external onlyOwner {
        require(protocols[protocolName] != address(0), "Protocol not registered");
        
        // Calculate power index based on APY and TVL
        // Simple formula: powerIndex = APY * sqrt(TVL) / 10^9
        // This rewards both high APY and significant TVL
        uint256 powerIndex = (apy * sqrt(tvl)) / 1e9;
        
        protocolAPYs[protocolName] = ProtocolAPY({
            protocolName: protocolName,
            apy: apy,
            powerIndex: powerIndex,
            tvl: tvl,
            timestamp: block.timestamp
        });
        
        emit APYUpdated(protocolName, apy, powerIndex, block.timestamp);
    }
    
    // ============ View Functions ============
    
    /**
     * @dev Get all protocols with their APY data
     * @return Array of ProtocolAPY structs
     */
    function getAllProtocolsData() external view returns (ProtocolAPY[] memory) {
        ProtocolAPY[] memory result = new ProtocolAPY[](protocolList.length);
        
        for (uint i = 0; i < protocolList.length; i++) {
            result[i] = protocolAPYs[protocolList[i]];
        }
        
        return result;
    }
    
    /**
     * @dev Get protocols ranked by power index
     * @return Array of ProtocolAPY structs sorted by power index
     */
    function getRankedProtocols() external view returns (ProtocolAPY[] memory) {
        ProtocolAPY[] memory result = new ProtocolAPY[](protocolList.length);
        
        // Copy all protocols to result array
        for (uint i = 0; i < protocolList.length; i++) {
            result[i] = protocolAPYs[protocolList[i]];
        }
        
        // Sort by power index (bubble sort for simplicity)
        for (uint i = 0; i < result.length; i++) {
            for (uint j = i + 1; j < result.length; j++) {
                if (result[j].powerIndex > result[i].powerIndex) {
                    ProtocolAPY memory temp = result[i];
                    result[i] = result[j];
                    result[j] = temp;
                }
            }
        }
        
        return result;
    }
    
    /**
     * @dev Calculate future value of investment using compound interest
     * @param principal Initial investment amount
     * @param apy Annual percentage yield (scaled by 10^18)
     * @param timeInDays Investment duration in days
     * @return Future value of the investment
     */
    function calculateCompoundInterest(
        uint256 principal,
        uint256 apy,
        uint256 timeInDays
    ) external pure returns (uint256) {
        // Convert APY to daily rate: (1 + r)^365 = (1 + APY)
        // Daily rate = (1 + APY)^(1/365) - 1
        // For simplicity, we'll use: dailyRate ≈ APY / 365
        uint256 dailyRate = apy / 365 / 1e18;
        
        // Calculate compound interest: P * (1 + r)^t
        uint256 futureValue = principal;
        for (uint256 i = 0; i < timeInDays; i++) {
            futureValue = futureValue + (futureValue * dailyRate) / 1e18;
        }
        
        return futureValue;
    }
    
    /**
     * @dev Get user deposits across all protocols
     * @param user Address of the user
     * @return protocols Array of protocol names
     * @return amounts Array of deposit amounts
     */
    function getUserDeposits(address user) external view returns (string[] memory, uint256[] memory) {
        uint256[] memory amounts = new uint256[](protocolList.length);
        
        for (uint i = 0; i < protocolList.length; i++) {
            amounts[i] = userDeposits[user][protocolList[i]];
        }
        
        return (protocolList, amounts);
    }
    
    // ============ User Functions ============
    
    /**
     * @dev Deposit BTC into a specific protocol
     * @param protocolName Name of the protocol
     * @param amount Amount to deposit
     */
    function deposit(string memory protocolName, uint256 amount) external {
        require(protocols[protocolName] != address(0), "Protocol not registered");
        
        // Transfer BTC from user to this contract
        // Note: In a real implementation, this would interact with Citrea's native BTC handling
        // For now, we'll just update the mapping
        
        userDeposits[msg.sender][protocolName] += amount;
        emit Deposit(msg.sender, protocolName, amount, block.timestamp);
    }
    
    /**
     * @dev Withdraw BTC from a specific protocol
     * @param protocolName Name of the protocol
     * @param amount Amount to withdraw
     */
    function withdraw(string memory protocolName, uint256 amount) external {
        require(protocols[protocolName] != address(0), "Protocol not registered");
        require(userDeposits[msg.sender][protocolName] >= amount, "Insufficient balance");
        
        // Transfer BTC from this contract to user
        // Note: In a real implementation, this would interact with Citrea's native BTC handling
        // For now, we'll just update the mapping
        
        userDeposits[msg.sender][protocolName] -= amount;
        emit Withdraw(msg.sender, protocolName, amount, block.timestamp);
    }
    
    // ============ Helper Functions ============
    
    /**
     * @dev Calculate the square root of a number
     * @param x The number to calculate the square root of
     * @return y The square root of x
     */
    function sqrt(uint256 x) internal pure returns (uint256 y) {
        if (x == 0) return 0;
        else if (x <= 3) return 1;
        
        uint256 z = (x + 1) / 2;
        y = x;
        
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }
} 