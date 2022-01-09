const ADDR = "0x760A98645F5B2e4E261d5a7dEAF58F2e6243fb95";
const ABI = [
  {
    constant: true,
    inputs: [],
    name: "Tester",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "c",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "farmers",
    outputs: [
      {
        internalType: "address",
        name: "farmerAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "farmerId",
        type: "string",
      },
      {
        internalType: "string",
        name: "farmerName",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "cropName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "phone",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expectedPrice",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "fundaddr",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "j",
        type: "uint256",
      },
    ],
    name: "getFarmerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "j",
        type: "uint256",
      },
    ],
    name: "getproduce",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "string",
        name: "k",
        type: "string",
      },
    ],
    name: "getquality",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lots",
    outputs: [
      {
        internalType: "string",
        name: "lotNum",
        type: "string",
      },
      {
        internalType: "string",
        name: "grade",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "MRP",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "testDate",
        type: "string",
      },
      {
        internalType: "string",
        name: "expiryDate",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "faddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "loc",
        type: "string",
      },
      {
        internalType: "string",
        name: "cr",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "con",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "q",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pr",
        type: "uint256",
      },
    ],
    name: "produce",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "ll",
        type: "string",
      },
      {
        internalType: "string",
        name: "g",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "p",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tt",
        type: "string",
      },
      {
        internalType: "string",
        name: "e",
        type: "string",
      },
    ],
    name: "quality",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "s",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "sendCoin",
    outputs: [
      {
        internalType: "bool",
        name: "sufficient",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "t",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
export { ABI, ADDR };
