// node getPubKey <TxId> <net>
// valid values for "net": "m" for mainnet and "t" for testnet
// source: https://ethereum.stackexchange.com/questions/125890/how-to-recover-the-public-key-from-r-s-and-v-without-the-private-key
const { ethers } = require("ethers");
// require('dotenv').config();
const tURL = 'https://testnet.sovryn.app/rpc';
const mURL = 'https://mainnet.sovryn.app/rpc';
// const KEY = process.env.INFURA;
// const mURL = 'https://mainnet.infura.io/v3/' + KEY;
const tnet = new ethers.providers.JsonRpcProvider(tURL);
const mnet = new ethers.providers.JsonRpcProvider(mURL);
const PARAMETERS = process.argv;
const net  = (PARAMETERS[3] != 'm' && PARAMETERS[3] != 'M') ? tnet : mnet;
const Transaction = PARAMETERS[2];
var TxObj = {};
const LOG = console.log;

// exports.

const getPublicKeyFromTransactionID = async (TxId) => {

        try {
            TxObj = await net.getTransaction(TxId);
        } catch (error) {
            LOG('there was an error reading the transaction, which is: ' + error);
            return;             
        }

    const expandedSig = {
        r: TxObj.r,
        s: TxObj.s,
        v: TxObj.v
    }

    const signature = ethers.utils.joinSignature(expandedSig);

    let transactionHashData;
    switch (TxObj.type) {
        case 0:
            transactionHashData = {
                gasPrice: TxObj.gasPrice,
                gasLimit: TxObj.gasLimit,
                value: TxObj.value,
                nonce: TxObj.nonce,
                data: TxObj.data,
                chainId: TxObj.chainId,
                to: TxObj.to
            };
            break;

        case 2:
            transactionHashData = {
                gasLimit: TxObj.gasLimit,
                value: TxObj.value,
                nonce: TxObj.nonce,
                data: TxObj.data,
                chainId: TxObj.chainId,
                to: TxObj.to,
                type: 2,
                maxFeePerGas: TxObj.maxFeePerGas,
                maxPriorityFeePerGas: TxObj.maxPriorityFeePerGas
            }
            break;

        default:
            throw "Unsupported transactionHash type";
    }

    const rstransactionHash = await ethers.utils.resolveProperties(transactionHashData);
    const raw = ethers.utils.serializeTransaction(rstransactionHash); // returns RLP encoded transactionHash
    const msgHash = ethers.utils.keccak256(raw); // as specified by ECDSA
    const msgBytes = ethers.utils.arrayify(msgHash); // create binary hash
    const recoveredPubKey = ethers.utils.recoverPublicKey(msgBytes, signature); // public key
    const recoveredAddress = ethers.utils.computeAddress(ethers.utils.arrayify(recoveredPubKey)); // address
    LOG('\nThe signer\'s public key of the Tx is: ' + recoveredPubKey + '\nAnd the sender\'s address is: ' + recoveredAddress.toLowerCase());
    return [recoveredPubKey,recoveredAddress.toLowerCase()];
    
}

getPublicKeyFromTransactionID(Transaction);