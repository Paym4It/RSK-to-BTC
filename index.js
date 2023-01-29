// node index <net> <tx-id>
// values vor "net": "m" for mainnet and "t" for testnet
const col = require('cli-color');
const { getPublicKeyFromTransactionID } = require('./deps/_getPubKey');
const PARAMETERS = process.argv;
LOG = console.log;

async function run() {
    const Computations = await getPublicKeyFromTransactionID(PARAMETERS[2],PARAMETERS[3]);
    // LOG(col.yellowBright('\nThe serialized raw transaction is: ') + col.greenBright(Computations[0]) + '\n');
    LOG(col.yellowBright('The raw transaction\'s hash is: ') + col.greenBright(Computations[1]) + '\n');
    LOG(col.yellowBright('The signer\'s public key is: ') + col.greenBright(Computations[2]) + '\n');
    LOG(col.yellowBright('And the signer\'s address is: ') + col.greenBright(Computations[3]) + '\n');
}
run();