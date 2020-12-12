var Token = artifacts.require("./GameToken.sol");

module.exports = function (deployer) {
  deployer.deploy(Token, "GameToken", "GT", 0);
};

//-----------------------------------------------------------------

/*

// Run unit tests to populate my contract
// ...
// ...

// getGasPrice returns the gas price on the current network
contract.web3.eth.getGasPrice(function(error, result){
    var gasPrice = Number(result);
    console.log("Gas Price is " + gasPrice + " wei"); // "10000000000000"

    // Get Contract instance
    contract.deployed().then(function(instance) {

        // Use the keyword 'estimateGas' after the function name to get the gas estimation for this particular function
        return instance.giveAwayDividend.estimateGas(1);

    }).then(function(result) {
        var gas = Number(result);

        console.log("gas estimation = " + gas + " units");
        console.log("gas cost estimation = " + (gas * gasPrice) + " wei");
        console.log("gas cost estimation = " + contract.web3.fromWei((gas * gasPrice), 'ether') + " ether");
    });
});

*/
