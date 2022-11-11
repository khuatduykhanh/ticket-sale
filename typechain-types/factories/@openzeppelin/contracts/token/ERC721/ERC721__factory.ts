/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC721,
  ERC721Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620018c1380380620018c183398101604081905262000034916200024b565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b5050506200030e565b8280546200007690620002dd565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681016001600160401b03811182821017156200014c576200014c6200010e565b6040525050565b60006200015f60405190565b90506200016d828262000124565b919050565b60006001600160401b038211156200018e576200018e6200010e565b601f19601f83011660200192915050565b60005b83811015620001bc578181015183820152602001620001a2565b83811115620001cc576000848401525b50505050565b6000620001e9620001e38462000172565b62000153565b905082815260208101848484011115620002065762000206600080fd5b620002138482856200019f565b509392505050565b600082601f830112620002315762000231600080fd5b815162000243848260208601620001d2565b949350505050565b60008060408385031215620002635762000263600080fd5b82516001600160401b038111156200027e576200027e600080fd5b6200028c858286016200021b565b602085015190935090506001600160401b03811115620002af57620002af600080fd5b620002bd858286016200021b565b9150509250929050565b634e487b7160e01b600052602260045260246000fd5b600281046001821680620002f257607f821691505b60208210811415620003085762000308620002c7565b50919050565b6115a3806200031e6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b8578063b88d4fde146101cb578063c87b56dd146101de578063e985e9c5146101f157600080fd5b80636352211e1461017d57806370a082311461019057806395d89b41146101b057600080fd5b8063095ea7b3116100bd578063095ea7b31461014257806323b872dd1461015757806342842e0e1461016a57600080fd5b806301ffc9a7146100e457806306fdde031461010d578063081812fc14610122575b600080fd5b6100f76100f2366004610d1a565b61022d565b6040516101049190610d45565b60405180910390f35b610115610312565b6040516101049190610db1565b610135610130366004610dd3565b6103a4565b6040516101049190610e0e565b610155610150366004610e30565b6103cb565b005b610155610165366004610e6d565b610478565b610155610178366004610e6d565b6104a9565b61013561018b366004610dd3565b6104c4565b6101a361019e366004610ebd565b6104f9565b6040516101049190610ee4565b61011561053d565b6101556101c6366004610f05565b61054c565b6101556101d936600461102b565b61055b565b6101156101ec366004610dd3565b610593565b6100f76101ff3660046110aa565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806102c057507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061030c57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060008054610321906110f3565b80601f016020809104026020016040519081016040528092919081815260200182805461034d906110f3565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b5050505050905090565b60006103af82610607565b506000908152600460205260409020546001600160a01b031690565b60006103d6826104c4565b9050806001600160a01b0316836001600160a01b031614156104135760405162461bcd60e51b815260040161040a9061117a565b60405180910390fd5b336001600160a01b038216148061044d57506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b6104695760405162461bcd60e51b815260040161040a906111e2565b610473838361063e565b505050565b61048233826106c4565b61049e5760405162461bcd60e51b815260040161040a9061124a565b610473838383610743565b6104738383836040518060200160405280600081525061055b565b6000818152600260205260408120546001600160a01b03168061030c5760405162461bcd60e51b815260040161040a9061128e565b60006001600160a01b0382166105215760405162461bcd60e51b815260040161040a906112f6565b506001600160a01b031660009081526003602052604090205490565b606060018054610321906110f3565b610557338383610890565b5050565b61056533836106c4565b6105815760405162461bcd60e51b815260040161040a9061124a565b61058d84848484610951565b50505050565b606061059e82610607565b60006105b560408051602081019091526000815290565b905060008151116105d55760405180602001604052806000815250610600565b806105df84610984565b6040516020016105f0929190611328565b6040516020818303038152906040525b9392505050565b6000818152600260205260409020546001600160a01b031661063b5760405162461bcd60e51b815260040161040a9061128e565b50565b600081815260046020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416908117909155819061068b826104c4565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806106d0836104c4565b9050806001600160a01b0316846001600160a01b0316148061071757506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061073b5750836001600160a01b0316610730846103a4565b6001600160a01b0316145b949350505050565b826001600160a01b0316610756826104c4565b6001600160a01b03161461077c5760405162461bcd60e51b815260040161040a90611396565b6001600160a01b0382166107a25760405162461bcd60e51b815260040161040a906113fe565b6107af8383836001610a2e565b826001600160a01b03166107c2826104c4565b6001600160a01b0316146107e85760405162461bcd60e51b815260040161040a90611396565b600081815260046020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000009081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031614156108c25760405162461bcd60e51b815260040161040a90611440565b6001600160a01b038381166000818152600560209081526040808320948716808452949091529081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190610944908590610d45565b60405180910390a3505050565b61095c848484610743565b61096884848484610ab6565b61058d5760405162461bcd60e51b815260040161040a906114a8565b6060600061099183610bfe565b600101905060008167ffffffffffffffff8111156109b1576109b1610f38565b6040519080825280601f01601f1916602001820160405280156109db576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084610a2157610a26565b6109e5565b509392505050565b600181111561058d576001600160a01b03841615610a74576001600160a01b03841660009081526003602052604081208054839290610a6e9084906114ce565b90915550505b6001600160a01b0383161561058d576001600160a01b03831660009081526003602052604081208054839290610aab9084906114e5565b909155505050505050565b60006001600160a01b0384163b15610bf3576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a0290610b139033908990889088906004016114fd565b6020604051808303816000875af1925050508015610b4e575060408051601f3d908101601f19168201909252610b4b9181019061154c565b60015b610ba8573d808015610b7c576040519150601f19603f3d011682016040523d82523d6000602084013e610b81565b606091505b508051610ba05760405162461bcd60e51b815260040161040a906114a8565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a020000000000000000000000000000000000000000000000000000000014905061073b565b506001949350505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310610c47577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310610c73576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610c9157662386f26fc10000830492506010015b6305f5e1008310610ca9576305f5e100830492506008015b6127108310610cbd57612710830492506004015b60648310610ccf576064830492506002015b600a831061030c5760010192915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081165b811461063b57600080fd5b803561030c81610ce0565b600060208284031215610d2f57610d2f600080fd5b600061073b8484610d0f565b8015155b82525050565b6020810161030c8284610d3b565b60005b83811015610d6e578181015183820152602001610d56565b8381111561058d5750506000910152565b6000610d89825190565b808452602084019350610da0818560208601610d53565b601f01601f19169290920192915050565b602080825281016106008184610d7f565b80610d04565b803561030c81610dc2565b600060208284031215610de857610de8600080fd5b600061073b8484610dc8565b60006001600160a01b03821661030c565b610d3f81610df4565b6020810161030c8284610e05565b610d0481610df4565b803561030c81610e1c565b60008060408385031215610e4657610e46600080fd5b6000610e528585610e25565b9250506020610e6385828601610dc8565b9150509250929050565b600080600060608486031215610e8557610e85600080fd5b6000610e918686610e25565b9350506020610ea286828701610e25565b9250506040610eb386828701610dc8565b9150509250925092565b600060208284031215610ed257610ed2600080fd5b600061073b8484610e25565b80610d3f565b6020810161030c8284610ede565b801515610d04565b803561030c81610ef2565b60008060408385031215610f1b57610f1b600080fd5b6000610f278585610e25565b9250506020610e6385828601610efa565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715610f7457610f74610f38565b6040525050565b6000610f8660405190565b9050610f928282610f4e565b919050565b600067ffffffffffffffff821115610fb157610fb1610f38565b601f19601f83011660200192915050565b82818337506000910152565b6000610fe1610fdc84610f97565b610f7b565b905082815260208101848484011115610ffc57610ffc600080fd5b610a26848285610fc2565b600082601f83011261101b5761101b600080fd5b813561073b848260208601610fce565b6000806000806080858703121561104457611044600080fd5b60006110508787610e25565b945050602061106187828801610e25565b935050604061107287828801610dc8565b925050606085013567ffffffffffffffff81111561109257611092600080fd5b61109e87828801611007565b91505092959194509250565b600080604083850312156110c0576110c0600080fd5b60006110cc8585610e25565b9250506020610e6385828601610e25565b634e487b7160e01b600052602260045260246000fd5b60028104600182168061110757607f821691505b6020821081141561111a5761111a6110dd565b50919050565b60218152602081017f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6581527f7200000000000000000000000000000000000000000000000000000000000000602082015290505b60400190565b6020808252810161030c81611120565b603d8152602081017f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f81527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060208201529050611174565b6020808252810161030c8161118a565b602d8152602081017f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6581527f72206f7220617070726f7665640000000000000000000000000000000000000060208201529050611174565b6020808252810161030c816111f2565b60188152602081017f4552433732313a20696e76616c696420746f6b656e2049440000000000000000815290505b60200190565b6020808252810161030c8161125a565b60298152602081017f4552433732313a2061646472657373207a65726f206973206e6f74206120766181527f6c6964206f776e6572000000000000000000000000000000000000000000000060208201529050611174565b6020808252810161030c8161129e565b6000611310825190565b61131e818560208601610d53565b9290920192915050565b6113328184611306565b90506106008183611306565b60258152602081017f4552433732313a207472616e736665722066726f6d20696e636f72726563742081527f6f776e657200000000000000000000000000000000000000000000000000000060208201529050611174565b6020808252810161030c8161133e565b60248152602081017f4552433732313a207472616e7366657220746f20746865207a65726f2061646481527f726573730000000000000000000000000000000000000000000000000000000060208201529050611174565b6020808252810161030c816113a6565b60198152602081017f4552433732313a20617070726f766520746f2063616c6c65720000000000000081529050611288565b6020808252810161030c8161140e565b60328152602081017f4552433732313a207472616e7366657220746f206e6f6e20455243373231526581527f63656976657220696d706c656d656e746572000000000000000000000000000060208201529050611174565b6020808252810161030c81611450565b634e487b7160e01b600052601160045260246000fd5b6000828210156114e0576114e06114b8565b500390565b600082198211156114f8576114f86114b8565b500190565b6080810161150b8287610e05565b6115186020830186610e05565b6115256040830185610ede565b81810360608301526115378184610d7f565b9695505050505050565b805161030c81610ce0565b60006020828403121561156157611561600080fd5b600061073b848461154156fea2646970667358221220df6fd7df5667b9ae8930f702ea9c3685c748930b1aee12fa1d19675596256d2e64736f6c634300080c0033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}