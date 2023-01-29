// node index <net> <tx-id>
// values vor "net": "m" for mainnet and "t" for testnet
const col = require('cli-color');
const { getPublicKeyFromTransactionID } = require('./deps/_getPubKey');
const ch = require('child_process');
const PARAMETERS = process.argv;
LOG = console.log;

async function run() {
    const Computations = await getPublicKeyFromTransactionID(PARAMETERS[2],PARAMETERS[3]);
    // LOG(col.yellowBright('\nThe serialized raw transaction is: ') + col.greenBright(Computations[0]) + '\n');
    LOG(col.yellowBright('The raw transaction\'s hash is: ') + col.greenBright(Computations[1]) + '\n');
    LOG(col.yellowBright('The signer\'s public key is: ') + col.greenBright(Computations[2]) + '\n');
    LOG(col.yellowBright('And the signer\'s RSK address is: ') + col.greenBright(Computations[3]) + '\n');
    // const pk = Computations[2].slice(2);
    Computations[2] = Computations[2].slice(2);
    const NET = (PARAMETERS[2] != 'm' && PARAMETERS[2] != 'M') ? 'btc_testnet' : 'btc';

    const process0 = ch.execSync('btc_address_dump -c ' + NET + ' ' + Computations[2]);
    LOG(col.yellowBright('\nand the possible addresses in bitcoin side are: '));
    LOG(col.greenBright(process0.toString()));
}
run();