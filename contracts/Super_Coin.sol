// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Super_Coin is ERC20 {

    constructor() ERC20("NovaX", "NVX") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }
}
