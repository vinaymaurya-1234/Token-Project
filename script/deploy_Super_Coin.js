const hre = require("hardhat");

async function main(){

    const SuperCoin = await hre.ethers.getContractFactory("Super_Coin");
    const superCoin = await SuperCoin.deploy();
    await superCoin.waitForDeployment();

    const ContractAddress = await superCoin.getAddress();
    console.log("Super_Coin deployed to:",ContractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });