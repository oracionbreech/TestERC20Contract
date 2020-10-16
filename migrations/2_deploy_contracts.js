const TestERC20Contract = artifacts.require("../contracts/TestERC20Contract.sol");
module.exports = function(deployer, network, accounts) {
 deployer.deploy(TestERC20Contract, {from: accounts[0]});
};