import { nano_models, populateTransaction, processTest } from "../test.fixture";

const contractName = "SeaPort";
const contractAddr = "0x00000000006c3852cbef3e08e8df289169ede581";
const testNetwork = "ethereum";

const testLabel = "fullfilBasicOrder NOerc20_nft"; // <= Name of the test
const testDirSuffix = testLabel.toLowerCase().replace(/\s+/g, "_");

// https://etherscan.io/tx/0xaa571e269fe6212f6d55866a80636252d175948611d9e569969e50d7682df68f
// but erc20 address is wrong
const inputData =
  "0xfb0f3ee1000000000000000000000000000000000000000000000000000000000000002000000000000000000000000016d4c048f83bd7e37d49ea4c83a07267ec4203da00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000633de2400000000000000000000000000085ff706e63a62dd42e2f41beb10f315c8102f4e000000000000000000000000004c00500000ad104d7dbd00e3ae0a5c00560c00000000000000000000000000c36cf0cfcb5d905b8b513860db0cfe63f6cf9f5c00000000000000000000000000000023000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000f00000000000000000000000000000000000000000000000000000000634674cc000000000000000000000000000000000000000000000000000000006347c64c0000000000000000000000000000000000000000000000000000000000000000360c6ebe00000000000000000000000000000000000000005b0c439dbdb5d1f20000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f00000000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f00000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000002e00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000002aea54000000000000000000000000000000a26b00c1f0df003000390027140000faa7190000000000000000000000000000000000000000000000000000000055d4a800000000000000000000000000a92abb0d0dd1e8e73006fc3b6229b7bd9e0d5c6100000000000000000000000000000000000000000000000000000000000000411d30df9f7085fca07223c770dab127c7f6fb025d3af35c8974b1fa1848b13332726b34fa3ff65a9bdc47d7a14910fc2fb2548c81cb0ddb66b4fde891fd97c5ee1c00000000000000000000000000000000000000000000000000000000000000360c6ebe";

const models = [
  {
    name: "nanos",
    steps: 11,
  },
  // {
  // 	name: 'nanox',
  // 	steps: 0
  // },
];

// populate unsignedTx from genericTx and get network chain id
const unsignedTx = populateTransaction(contractAddr, inputData, testNetwork);
// Process tests for each nano models
models.forEach((model) => {
  const nano_model = nano_models.find((nano_model) =>
    nano_model.name === model.name
  );
  processTest(
    nano_model,
    model.steps,
    contractName,
    testLabel,
    testDirSuffix,
    unsignedTx,
    testNetwork,
  );
});
