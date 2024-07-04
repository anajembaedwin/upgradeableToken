// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";

contract MyTokenProxy is TransparentUpgradeableProxy {
    constructor(address logic, address admin) TransparentUpgradeableProxy(logic, admin, "") {}
}
