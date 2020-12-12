pragma solidity >=0.4.22 <0.8.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract TestEstimateGas is ERC20, ERC20Detailed {

    constructor (string memory _name, string memory _symbol, uint8 _decimals)
      ERC20Detailed(_name, _symbol, _decimals)
      public
    {}

    function mint(address account, uint256 amount)
      public
      returns (bool)
    {
        _mint(account, amount);
        return true;
    }

}

//https://stackoverflow.com/questions/49380098/unable-to-connect-ganache-with-truffle-npm-dev-server
// how to connect truffle with metamask migrations
