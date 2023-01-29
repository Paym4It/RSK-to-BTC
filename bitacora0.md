PS F:\MIO\Paym4It\RSK-to-BTC> npm i --save-prod ethers

added 45 packages, and audited 46 packages in 36s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS F:\MIO\Paym4It\RSK-to-BTC> node
Welcome to Node.js v16.6.2.
Type ".help" for more information.
> const { encode } = require('ethers.utils.rlp');
Uncaught Error: Cannot find module 'ethers.utils.rlp'
Require stack:
- <repl>
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:94:18) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '<repl>' ]
}
> const { ethers } = require("ethers");
undefined
> const encode = ethers.utils.RLP.encode
Uncaught SyntaxError: Identifier 'encode' has already been declared
> const enc = ethers.utils.RLP.encode
undefined
> var tx = tnet.getTransaction('0x9c4af1d633b198cac83586681884e2edacc5820ee42625a194897b543da41d90');
Uncaught ReferenceError: tnet is not defined
> const tURL = 'https://testnet.sovryn.app/rpc';
undefined
> const tnet = new ethers.providers.JsonRpcProvider(tURL);
undefined
> var tx = tnet.getTransaction('0x9c4af1d633b198cac83586681884e2edacc5820ee42625a194897b543da41d90');
undefined
> var tx = await tnet.getTransaction('0x9c4af1d633b198cac83586681884e2edacc5820ee42625a194897b543da41d90');
undefined
> tx
{
  hash: '0x9c4af1d633b198cac83586681884e2edacc5820ee42625a194897b543da41d90',
  type: 0,
  accessList: null,
  blockHash: '0x7c2e5134168766912f4224f7322cff8c57b78e5848711584713a03bbd1c1a9f3',
  blockNumber: 3534470,
  transactionIndex: 0,
  confirmations: 1034,
  from: '0x3d9Cc512b19e2e9BF8a9d4691dB64Ae778B7bE95',
  gasPrice: BigNumber { _hex: '0x03e252e0', _isBigNumber: true },
  gasLimit: BigNumber { _hex: '0x0186a0', _isBigNumber: true },
  to: '0x6b41566353d6C7B8C2a7931d498F11489DacAc29',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  nonce: 16,
  data: '0xa9059cbb00000000000000000000000006ec273f70a1cfc4bc6c43ba15d5c19fe6d729ff00000000000000000000000000000000000000000000032d26d12e980b600000',
  r: '0x4f1bfd35c00ee07c25d6c73e285338615ae35fe710f6280b60a29db0445b5224',
  s: '0x47a422349116c29f8d1abf60e360a22728d518d077ca387034b017b753838fae',
  v: 97,
  creates: null,
  chainId: 31,
  wait: [Function (anonymous)]
}
> const {rrr} = require('ethers.utils.RLP.encode');
Uncaught Error: Cannot find module 'ethers.utils.RLP.encode'
Require stack:
- <repl>
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:94:18) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '<repl>' ]
}
> var Y = enc([tx.nonce,tx.gasPrice,tx.gasLimit,tx.to,tx.value,tx.data]);
Uncaught:
Error: RLP object must be BytesLike (argument="object", value=16, code=INVALID_ARGUMENT, version=rlp/5.7.0)
    at Logger.makeError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:238:21)
    at Logger.throwError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:247:20)
    at Logger.throwArgumentError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:250:21)
    at _encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:39:16)
    at F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:28:42
    at Array.forEach (<anonymous>)
    at _encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:27:16)
    at encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:54:33) {
  reason: 'RLP object must be BytesLike',
  code: 'INVALID_ARGUMENT',
  argument: 'object',
  value: 16
}
> tx.nonce
16
> tx.gasPrice.toString();
'65164000'
> var n = enc(tx.nonce)
Uncaught:
Error: RLP object must be BytesLike (argument="object", value=16, code=INVALID_ARGUMENT, version=rlp/5.7.0)
    at Logger.makeError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:238:21)
    at Logger.throwError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:247:20)
    at Logger.throwArgumentError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:250:21)
    at _encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:39:16)
    at encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:54:33) {
  reason: 'RLP object must be BytesLike',
  code: 'INVALID_ARGUMENT',
  argument: 'object',
  value: 16
}
> var n = enc(tx.data)
undefined
> n.toString();
'0xb844a9059cbb00000000000000000000000006ec273f70a1cfc4bc6c43ba15d5c19fe6d729ff00000000000000000000000000000000000000000000032d26d12e980b600000'
> var m = enc(tx.value)
Uncaught:
Error: RLP object must be BytesLike (argument="object", value={"type":"BigNumber","hex":"0x00"}, code=INVALID_ARGUMENT, version=rlp/5.7.0)
    at Logger.makeError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:238:21)
    at Logger.throwError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:247:20)
    at Logger.throwArgumentError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:250:21)
    at _encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:39:16)
    at encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:54:33) {
  reason: 'RLP object must be BytesLike',
  code: 'INVALID_ARGUMENT',
  argument: 'object',
  value: BigNumber { _hex: '0x00', _isBigNumber: true }
}
> var m = enc(tx.value.toString())
Uncaught:
Error: RLP object must be BytesLike (argument="object", value="0", code=INVALID_ARGUMENT, version=rlp/5.7.0)
    at Logger.makeError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:238:21)
    at Logger.throwError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:247:20)
    at Logger.throwArgumentError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:250:21)
    at _encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:39:16)
    at encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:54:33) {
  reason: 'RLP object must be BytesLike',
  code: 'INVALID_ARGUMENT',
  argument: 'object',
  value: '0'
}
> tx.value.toString();
'0'
> const Web3 = require('web3');
undefined
> const tnet3 = new Web3(tURL);
undefined
> var tx = await tnet3.eth.getTransaction('0x9c4af1d633b198cac83586681884e2edacc5820ee42625a194897b543da41d90');
undefined
> tx
{
  hash: '0x9c4af1d633b198cac83586681884e2edacc5820ee42625a194897b543da41d90',
  nonce: 16,
  blockHash: '0x7c2e5134168766912f4224f7322cff8c57b78e5848711584713a03bbd1c1a9f3',
  blockNumber: 3534470,
  transactionIndex: 0,
  from: '0x3d9Cc512b19e2e9BF8a9d4691dB64Ae778B7bE95',
  to: '0x6b41566353d6C7B8C2a7931d498F11489DacAc29',
  gas: 100000,
  gasPrice: '65164000',
  value: '0',
  input: '0xa9059cbb00000000000000000000000006ec273f70a1cfc4bc6c43ba15d5c19fe6d729ff00000000000000000000000000000000000000000000032d26d12e980b600000',
  v: '0x61',
  r: '0x4f1bfd35c00ee07c25d6c73e285338615ae35fe710f6280b60a29db0445b5224',
  s: '0x47a422349116c29f8d1abf60e360a22728d518d077ca387034b017b753838fae'
}
> var Y = enc(tx.input)
undefined
> var Y = enc(tx.value)
Uncaught:
Error: RLP object must be BytesLike (argument="object", value="0", code=INVALID_ARGUMENT, version=rlp/5.7.0)
    at Logger.makeError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:238:21)
    at Logger.throwError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:247:20)
    at Logger.throwArgumentError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:250:21)
    at _encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:39:16)
    at encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:54:33) {
  reason: 'RLP object must be BytesLike',
  code: 'INVALID_ARGUMENT',
  argument: 'object',
  value: '0'
}
> const hEx = tnet3.utils.toHex;
undefined
> var Y = enc(hEx(tx.value));
Uncaught:
Error: RLP object must be BytesLike (argument="object", value="0x0", code=INVALID_ARGUMENT, version=rlp/5.7.0)
    at Logger.makeError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:238:21)
    at Logger.throwError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:247:20)
    at Logger.throwArgumentError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:250:21)
    at _encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:39:16)
    at encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:54:33) {
  reason: 'RLP object must be BytesLike',
  code: 'INVALID_ARGUMENT',
  argument: 'object',
  value: '0x0'
}
> const hexToBytes = tnet3.utils.hexToBytes;
undefined
> var Y = enc(hexToBytes(hEx(tx.value)));
Uncaught:
Error: RLP object must be BytesLike (argument="object", value=0, code=INVALID_ARGUMENT, version=rlp/5.7.0)
    at Logger.makeError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:238:21)
    at Logger.throwError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:247:20)
    at Logger.throwArgumentError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:250:21)
    at _encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:39:16)
    at F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:28:42
    at Array.forEach (<anonymous>)
    at _encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:27:16)
    at encode (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\rlp\lib\index.js:54:33) {
  reason: 'RLP object must be BytesLike',
  code: 'INVALID_ARGUMENT',
  argument: 'object',
  value: 0
}
> var tx0 = await tnet.getTransaction('0x9c4af1d633b198cac83586681884e2edacc5820ee42625a194897b543da41d90');
undefined
> tx0
{
  hash: '0x9c4af1d633b198cac83586681884e2edacc5820ee42625a194897b543da41d90',
  type: 0,
  accessList: null,
  blockHash: '0x7c2e5134168766912f4224f7322cff8c57b78e5848711584713a03bbd1c1a9f3',
  blockNumber: 3534470,
  transactionIndex: 0,
  confirmations: 1105,
  from: '0x3d9Cc512b19e2e9BF8a9d4691dB64Ae778B7bE95',
  gasPrice: BigNumber { _hex: '0x03e252e0', _isBigNumber: true },
  gasLimit: BigNumber { _hex: '0x0186a0', _isBigNumber: true },
  to: '0x6b41566353d6C7B8C2a7931d498F11489DacAc29',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  nonce: 16,
  data: '0xa9059cbb00000000000000000000000006ec273f70a1cfc4bc6c43ba15d5c19fe6d729ff00000000000000000000000000000000000000000000032d26d12e980b600000',
  r: '0x4f1bfd35c00ee07c25d6c73e285338615ae35fe710f6280b60a29db0445b5224',
  s: '0x47a422349116c29f8d1abf60e360a22728d518d077ca387034b017b753838fae',
  v: 97,
  creates: null,
  chainId: 31,
  wait: [Function (anonymous)]
}
> tx
{
  hash: '0x9c4af1d633b198cac83586681884e2edacc5820ee42625a194897b543da41d90',
  nonce: 16,
  blockHash: '0x7c2e5134168766912f4224f7322cff8c57b78e5848711584713a03bbd1c1a9f3',
  blockNumber: 3534470,
  transactionIndex: 0,
  from: '0x3d9Cc512b19e2e9BF8a9d4691dB64Ae778B7bE95',
  to: '0x6b41566353d6C7B8C2a7931d498F11489DacAc29',
  gas: 100000,
  gasPrice: '65164000',
  value: '0',
  input: '0xa9059cbb00000000000000000000000006ec273f70a1cfc4bc6c43ba15d5c19fe6d729ff00000000000000000000000000000000000000000000032d26d12e980b600000',
  v: '0x61',
  r: '0x4f1bfd35c00ee07c25d6c73e285338615ae35fe710f6280b60a29db0445b5224',
  s: '0x47a422349116c29f8d1abf60e360a22728d518d077ca387034b017b753838fae'
}
> typeof tx0.gasPrice
'object'
> var gasPrice = tx0.gasPrice[Object.keys(tx0.gasPrice)[0]];
undefined
> gasPrice
'0x03e252e0'
> var Y = enc(gasPrice);
undefined
> const BN = tnet3.utils.toBN;
undefined
> var GAS = BN(tx.gas);
undefined
> typeof GAS
'object'
>
