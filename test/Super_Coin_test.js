const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Super_Coin Contract", function () {
    
    let SuperCoin;
    let superCoin;
    let owner;
    let addr1;

    beforeEach(async function(){
        [owner,addr1] = await ethers.getSigners();

        SuperCoin = await ethers.getContractFactory("Super_Coin");
        superCoin = await SuperCoin.deploy();
        await superCoin.waitForDeployment();
    });

    it("Should assign total supply to owner", async function () {
        const ownerBalance = await superCoin.checkBalance(owner.address);
        expect(ownerBalance).to.equal(10000);
    });

    it("Should transfer token correctly", async function () {
        await superCoin.transfer(addr1.address,100);

        const ownerBalance = await superCoin.checkBalance(owner.address);
        const addr1Balance = await superCoin.checkBalance(addr1.address);

        expect(ownerBalance).to.equal(9900);
        expect(addr1Balance).to.equal(100);
    });

    it("Should fail if transfer amount is zero.",async function () {
        await expect(
            superCoin.transfer(addr1.address, 0)
        ).to.be.rejectedWith("Transfer amount can't be zero.");
    });

    it("Should fail if sender have insufficient funds.", async function () {
        await expect(
            superCoin.connect(addr1).transfer(owner.address,10)
        ).to.be.rejectedWith("Not enough balance.");
    });

});