// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MockERC20
 * @dev A mock ERC20 token for testing purposes
 */
contract MockERC20 is ERC20, Ownable {
    uint8 private _decimals;

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimalsValue
    ) ERC20(name, symbol) Ownable(msg.sender) {
        _decimals = decimalsValue;
        _mint(msg.sender, 1000000 * 10**decimalsValue);
    }

    /**
     * @dev Function to mint tokens
     * @param to The address that will receive the minted tokens.
     * @param amount The amount of tokens to mint.
     * @return A boolean that indicates if the operation was successful.
     */
    function mint(address to, uint256 amount) public onlyOwner returns (bool) {
        _mint(to, amount);
        return true;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     */
    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
} 