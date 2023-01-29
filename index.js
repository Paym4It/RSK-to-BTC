// node index <net> <tx-id>
// values vor "net": "m" for mainnet and "t" for testnet
const { getRawTx } = require('./deps/_getRawTx');
const { h } = require('./deps/_getRawTxHash');
const PARAMETERS = process.argv;
async function run() {
    const H = h(await getRawTx(PARAMETERS[2],PARAMETERS[3]));
    console.log(H);
}
run();