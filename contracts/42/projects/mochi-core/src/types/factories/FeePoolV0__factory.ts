/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FeePoolV0, FeePoolV0Interface } from "../FeePoolV0";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_engine",
        type: "address",
      },
      {
        internalType: "address",
        name: "_uniswap",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ratio",
        type: "uint256",
      },
    ],
    name: "changeTreasuryRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "changecrvVoterRewardPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ratio",
        type: "uint256",
      },
    ],
    name: "changevMochiRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crvVoterRewardPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distributeMochi",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "engine",
    outputs: [
      {
        internalType: "contract IMochiEngine",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mochiShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sendToTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasuryRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasuryShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapRouter",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vMochiRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516112b43803806112b483398101604081905261002f91610081565b6001600160601b0319606092831b8116608052911b1660a0526702c68af0bb140000600155670b1a2bc2ec5000006002556100b4565b80516001600160a01b038116811461007c57600080fd5b919050565b6000806040838503121561009457600080fd5b61009d83610065565b91506100ab60208401610065565b90509250929050565b60805160601c60a05160601c61117a61013a6000396000818161012301528181610a560152610afe0152600081816101b5015281816101d9015281816102ba01528181610359015281816104780152818161055b0152818161062901528181610785015281816108a10152818161098c01528181610b9c0152610cbb015261117a6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80637796ff371161008c578063b5dd366d11610066578063b5dd366d1461018c578063ba681c4d1461019f578063bac051ad146101a8578063c9d4623f146101b057600080fd5b80637796ff371461015d5780638d573d55146101665780639a802a231461017957600080fd5b806320068712146100d457806332afe5f4146100f057806333656632146100f95780633a17e43a1461010e578063500bef8414610116578063735de9f71461011e575b600080fd5b6100dd60035481565b6040519081526020015b60405180910390f35b6100dd60025481565b61010c610107366004610fe2565b6101d7565b005b61010c6102a6565b61010c6102b8565b6101457f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100e7565b6100dd60045481565b61010c610174366004610eba565b610476565b600054610145906001600160a01b031681565b61010c61019a366004610fe2565b610559565b6100dd60015481565b61010c61061f565b6101457f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561023057600080fd5b505afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610ede565b6001600160a01b0316336001600160a01b0316146102a15760405162461bcd60e51b815260040161029890611014565b60405180910390fd5b600155565b6102ae61089d565b6102b6610b98565b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ee138d0f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561031157600080fd5b505afa158015610325573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103499190610ede565b6001600160a01b031663a9059cbb7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166361d027b36040518163ffffffff1660e01b815260040160206040518083038186803b1580156103b057600080fd5b505afa1580156103c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e89190610ede565b6004546040518363ffffffff1660e01b815260040161041c9291906001600160a01b03929092168252602082015260400190565b602060405180830381600087803b15801561043657600080fd5b505af115801561044a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046e9190610fc0565b506000600455565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b1580156104cf57600080fd5b505afa1580156104e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105079190610ede565b6001600160a01b0316336001600160a01b0316146105375760405162461bcd60e51b815260040161029890611014565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b1580156105b257600080fd5b505afa1580156105c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ea9190610ede565b6001600160a01b0316336001600160a01b03161461061a5760405162461bcd60e51b815260040161029890611014565b600255565b60006004546003547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ee138d0f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561068057600080fd5b505afa158015610694573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b89190610ede565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a082319060240160206040518083038186803b1580156106f957600080fd5b505afa15801561070d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107319190610ffb565b61073b91906110fc565b61074591906110fc565b9050670de0b6b3a76400006001548261075e91906110dd565b61076891906110bb565b6004600082825461077991906110a3565b925050819055506004547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ee138d0f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107dc57600080fd5b505afa1580156107f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108149190610ede565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a082319060240160206040518083038186803b15801561085557600080fd5b505afa158015610869573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088d9190610ffb565b61089791906110fc565b60035550565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ee138d0f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108f857600080fd5b505afa15801561090c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109309190610ede565b6040805160028082526060820183529293506000929091602083019080368337019050509050818160008151811061096a5761096a611129565b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c0baf8f76040518163ffffffff1660e01b815260040160206040518083038186803b1580156109e357600080fd5b505afa1580156109f7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1b9190610ede565b81600181518110610a2e57610a2e611129565b6001600160a01b03928316602091820292909201015260035460405163095ea7b360e01b81527f00000000000000000000000000000000000000000000000000000000000000008316600482015260248101919091529083169063095ea7b390604401602060405180830381600087803b158015610aab57600080fd5b505af1158015610abf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae39190610fc0565b506003546040516338ed173960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916338ed173991610b3d91906001908690309060001990600401611032565b600060405180830381600087803b158015610b5757600080fd5b505af1158015610b6b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b939190810190610efb565b505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c0baf8f76040518163ffffffff1660e01b815260040160206040518083038186803b158015610bf357600080fd5b505afa158015610c07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2b9190610ede565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a082319060240160206040518083038186803b158015610c7057600080fd5b505afa158015610c84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca89190610ffb565b9050816001600160a01b031663a9059cbb7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166319ac6e086040518163ffffffff1660e01b815260040160206040518083038186803b158015610d1257600080fd5b505afa158015610d26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4a9190610ede565b670de0b6b3a764000060025485610d6191906110dd565b610d6b91906110bb565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b158015610db157600080fd5b505af1158015610dc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de99190610fc0565b506000546002546001600160a01b038085169263a9059cbb92911690670de0b6b3a764000090610e1990826110fc565b610e2390866110dd565b610e2d91906110bb565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b158015610e7357600080fd5b505af1158015610e87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eab9190610fc0565b50506000600381905560045550565b600060208284031215610ecc57600080fd5b8135610ed781611155565b9392505050565b600060208284031215610ef057600080fd5b8151610ed781611155565b60006020808385031215610f0e57600080fd5b825167ffffffffffffffff80821115610f2657600080fd5b818501915085601f830112610f3a57600080fd5b815181811115610f4c57610f4c61113f565b8060051b604051601f19603f83011681018181108582111715610f7157610f7161113f565b604052828152858101935084860182860187018a1015610f9057600080fd5b600095505b83861015610fb3578051855260019590950194938601938601610f95565b5098975050505050505050565b600060208284031215610fd257600080fd5b81518015158114610ed757600080fd5b600060208284031215610ff457600080fd5b5035919050565b60006020828403121561100d57600080fd5b5051919050565b60208082526004908201526310b3b7bb60e11b604082015260600190565b600060a082018783526020878185015260a0604085015281875180845260c086019150828901935060005b818110156110825784516001600160a01b03168352938301939183019160010161105d565b50506001600160a01b03969096166060850152505050608001529392505050565b600082198211156110b6576110b6611113565b500190565b6000826110d857634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156110f7576110f7611113565b500290565b60008282101561110e5761110e611113565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461116a57600080fd5b5056fea164736f6c6343000807000a";

export class FeePoolV0__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _engine: string,
    _uniswap: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FeePoolV0> {
    return super.deploy(
      _engine,
      _uniswap,
      overrides || {}
    ) as Promise<FeePoolV0>;
  }
  getDeployTransaction(
    _engine: string,
    _uniswap: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_engine, _uniswap, overrides || {});
  }
  attach(address: string): FeePoolV0 {
    return super.attach(address) as FeePoolV0;
  }
  connect(signer: Signer): FeePoolV0__factory {
    return super.connect(signer) as FeePoolV0__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeePoolV0Interface {
    return new utils.Interface(_abi) as FeePoolV0Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeePoolV0 {
    return new Contract(address, _abi, signerOrProvider) as FeePoolV0;
  }
}
