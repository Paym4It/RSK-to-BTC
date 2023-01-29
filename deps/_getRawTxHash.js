// use: $ node getRawTxHash <rlp-serialized-raw-tx>
const { ethers } = require("ethers");
const hAsh = ethers.utils.keccak256;
const h = (rlp) => hAsh(rlp);

module.exports = {h};
