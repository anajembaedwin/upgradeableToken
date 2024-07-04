// scripts/deploy.js
const { ethers } = require("hardhat");
const fs = require("fs");

async function deploy() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    try {
        // Deploy MyToken contract
        console.log("Deploying MyToken...");
        const MyToken = await ethers.getContractFactory("MyToken");
        const myToken = await MyToken.deploy(deployer.address);
        await myToken.deployed();
        console.log("MyToken deployed to:", myToken.deployTransaction.contractAddress);

        // Deploy MyTokenProxy contract
        console.log("Deploying MyTokenProxy...");
        const MyTokenProxy = await ethers.getContractFactory("MyTokenProxy");
        const proxy = await MyTokenProxy.deploy(myToken.deployTransaction.contractAddress, deployer.address);
        await proxy.deployed();
        console.log("Proxy contract deployed to:", proxy.deployTransaction.contractAddress);

        // Store the proxy address in a file
        fs.writeFileSync("proxy-address.txt", proxy.deployTransaction.contractAddress);
    } catch (error) {
        console.error("Error in deployment:", error);
        process.exit(1); // Exit with error code
    }
}

deploy()
   .then(() => process.exit(0)) // Exit with success code
   .catch(error => {
        console.error("Error in deployment:", error);
        process.exit(1); // Exit with error code
    });