const { ethers } = require("hardhat");
const fs = require("fs"); // Import the fs module

async function init() {
  const [deployer] = await ethers.getSigners();

  // Read the proxy address from the file
  const proxyAddress = fs.readFileSync("proxy-address.txt", "utf8");
  const MyTokenProxy = await ethers.getContractFactory("MyTokenProxy");
  const proxy = await MyTokenProxy.attach(proxyAddress);

  // Read the implementation address from the file
  const implAddress = fs.readFileSync("impl-address.txt", "utf8");
  await proxy.upgradeTo(implAddress);

  console.log("Proxy contract initialized with implementation:", implAddress);
}

init();