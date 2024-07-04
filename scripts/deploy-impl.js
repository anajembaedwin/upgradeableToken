const { ethers } = require("hardhat");
const fs = require("fs"); // Import the fs module

async function deploy() {
  const [deployer] = await ethers.getSigners();

  const MyToken = await ethers.getContractFactory("MyToken");
  const impl = await MyToken.deploy(deployer.address);

  await impl.deployed();

  console.log("Implementation contract deployed to:", impl.address);

  // Store the implementation address in a file
  fs.writeFileSync("impl-address.txt", impl.address);
}

deploy();