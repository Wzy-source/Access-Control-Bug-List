# CVE-2018-10666
## Vulnerability Code
```solidity
contract Owned {
  address public owner;
  function Owned() {
    owner = msg.sender;
  }
  function setOwner(address _owner) returns (bool success) {
    owner = _owner;
    return true;
  }
  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }
}
```
## Analysis
函数默认的可见性为public，Attacker可以调用setOwner函数来获取ownership

# CVE-2018-10705        
同上

# CVE-2018-19831
## Vulnerability Code
```solidity


```

