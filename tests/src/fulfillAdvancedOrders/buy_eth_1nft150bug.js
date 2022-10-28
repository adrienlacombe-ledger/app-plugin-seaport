import { nano_models, processTest, populateTransaction } from "../test.fixture";

const contractName = "SeaPort";
const contractAddr = "0x00000000006c3852cbef3e08e8df289169ede581";
const testNetwork = "ethereum";

const testLabel = "fulfillAdvancedOrder buy eth 1nft bug150"; // <= Name of the test
const testDirSuffix = testLabel.toLowerCase().replace(/\s+/g, '_');

// https://etherscan.io/tx/0xad238e1f15a1d82a347e4792bb3d9e88d60713c31445e4578c5a156e71556b5a
const inputData = "0xe7acab24000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000006600000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000096000000000000000000000000000000000000000000000000000000000000052000000000000000000000000000000000000000000000000000000000000005a0000000000000000000000000a3aab2756db7369e2bfb2b9d58559ed422b3c73c000000000000000000000000004c00500000ad104d7dbd00e3ae0a5c00560c000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000062e628220000000000000000000000000000000000000000000000000000000062ef62a20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015d653bfa814e700000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003000000000000000000000000c36cf0cfcb5d905b8b513860db0cfe63f6cf9f5c00000000000000000000000000000044000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000096000000000000000000000000000000000000000000000000000000000000009600000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053ccb4cea3b8000000000000000000000000000000000000000000000000000053ccb4cea3b800000000000000000000000000a3aab2756db7369e2bfb2b9d58559ed422b3c73c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000243cd890b5800000000000000000000000000000000000000000000000000000243cd890b58000000000000000000000000008de9c5a032463c561423387a9648c5c7bcc5bc900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004879b1216b0000000000000000000000000000000000000000000000000000004879b1216b000000000000000000000000000a92abb0d0dd1e8e73006fc3b6229b7bd9e0d5c610000000000000000000000000000000000000000000000000000000000000041ad7ab78a612997b428a78b293d79a23a7e4b7f4f6f5e8bfae4cf4d59869403406cd2660b1b0106edfa92ffdd94d19904d9cfc1dff055db4d590f94cd7dd871df1b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
const models = [
    {
        name: 'nanos',
        steps: 5
    },
    // {
    // 	name: 'nanox',
    // 	steps: 0
    // },
]

// populate unsignedTx from genericTx and get network chain id
const unsignedTx = populateTransaction(contractAddr, inputData, testNetwork);
// Process tests for each nano models
models.forEach((model) => {
    const nano_model = nano_models.find((nano_model) => nano_model.name === model.name)
    processTest(nano_model, model.steps, contractName, testLabel, testDirSuffix, unsignedTx, testNetwork)
})
