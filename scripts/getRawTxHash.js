// use: $ node getRawTxHash <rlp-serialized-raw-tx>
const { ethers } = require("ethers");
const PARAMETERS = process.argv;
const hAsh = ethers.utils.keccak256;
const h = hAsh(PARAMETERS[2]);

console.log('ethereum hash value: ' + h);
