// use: $ node getRawTx <txId-hash> <net>
// valid values for <net> = m (for mainnet) or t (for testnet) ... default value: t
// it returns the serialized string for the raw transaction (before signature)
// reference: https://ethereum.stackexchange.com/questions/87299/how-to-construct-a-raw-ethereum-transaction-from-transaction-data
const { ethers } = require("ethers");
const tURL = 'https://testnet.sovryn.app/rpc';
const mURL = 'https://mainnet.sovryn.app/rpc';
const tnet = new ethers.providers.JsonRpcProvider(tURL);
const mnet = new ethers.providers.JsonRpcProvider(mURL);
const PARAMETERS = process.argv;
const encode = ethers.utils.RLP.encode;
const BN = ethers.BigNumber.from;

const net  = (PARAMETERS[3] != 'm' && PARAMETERS[3] != 'M') ? tnet : mnet;
const Transaction = PARAMETERS[2];

async function getRawTx(TxId) {
    
    try {

        const tx = await net.getTransaction(TxId);
        // console.log('the tx is: ' + JSON.stringify(tx,null,2));
        // get the nonce (number) in BytesLike format
        const nonce = BN(tx.nonce);
        
        const rawTransaction = encode(
            [   nonce[Object.keys(nonce)[0]], 
                tx.gasPrice[Object.keys(tx.gasPrice)[0]], 
                tx.gasLimit[Object.keys(tx.gasLimit)[0]], 
                tx.to, 
                tx.value[Object.keys(tx.value)[0]], 
                tx.data
            ]);
            console.log('the serialized raw transaction is:' + rawTransaction);

    } catch (error) {

        console.log('there was an error reading the transaction, which is: ' + error);
        return;     

    }
    
}

getRawTx(Transaction);