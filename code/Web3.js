const Web3 = require('web3')
const rpcURL = "https://ropsten.infura.io/v3/91fc7de2a96c450e8501abbd48f94619" // Your RPC URL goes here
const web3 = new Web3(rpcURL)
const address = "0x04f17473ee101053C0ac771579eb017AE27BF738" // Your account address goes here
web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, 'ether')
})
console.log(balance);
