PS F:\MIO\Paym4It\RSK-to-BTC> npm list
rsk-to-btc@0.1.0 F:\MIO\Paym4It\RSK-to-BTC
├── ethers@5.7.2
└── web3@1.8.1

PS F:\MIO\Paym4It\RSK-to-BTC> npm -g list
C:\Users\Administrator\AppData\Roaming\npm
├── web3@1.8.1
└── yarn@1.22.19

PS F:\MIO\Paym4It\RSK-to-BTC> node
Welcome to Node.js v16.6.2.
Type ".help" for more information.
> const { ethers } = require("ethers");
undefined
> const encode = ethers.utils.RLP.encode;
undefined
> const tURL = 'https://testnet.sovryn.app/rpc';
undefined
> const tnet = new ethers.providers.JsonRpcProvider(tURL);
undefined
> var tx = await tnet.getTransaction('0x9c4af1d633b198cac83586681884e2edacc5820ee42625a194897b543da41d90');
undefined
> var Y = enc([tx.data]);
Uncaught ReferenceError: enc is not defined
> var Y = encode([tx.data]);
undefined
> Y
'0xf846b844a9059cbb00000000000000000000000006ec273f70a1cfc4bc6c43ba15d5c19fe6d729ff00000000000000000000000000000000000> var Y = encode([tx.to,tx.data]);
undefined
> Y
'0xf85b946b41566353d6c7b8c2a7931d498f11489dacac29b844a9059cbb00000000000000000000000006ec273f70a1cfc4bc6c43ba15d5c19fe6d729ff00000000000000000000000000000000000000000000032d26d12e980b600000'> var Y = encode([tx.gasLimit[Object.keys(tx.gasLimit)[0]],tx.to,tx.data]);
undefined
> Y
'0xf866108403e252e0830186a0946b41566353d6c7b8c2a7931d498f11489dacac2900b844a9059cbb00000000000000000000000006ec273f70a1cfc4bc6c43ba15d5c19fe6d729ff00000000000000000000000000000000000000000000032d26d12e980b600000'
> var n = '0x1e7'
undefined
> n = BN(n);
BigNumber { _hex: '0x01e7', _isBigNumber: true }
> n = n[Object.keys(n)[0]]
'0x01e7'
> gP = '0x2e90edd000';
'0x2e90edd000'
> gL = '0x30d40'
'0x30d40'
> gL = BN(gL);
BigNumber { _hex: '0x030d40', _isBigNumber: true }
> gL = gL[Object.keys(gL)[0]]
'0x030d40'
> t = '0xbd064928cdd4fd67fb99917c880e6560978d7ca1'
'0xbd064928cdd4fd67fb99917c880e6560978d7ca1'
> '0xbd064928cdd4fd67fb99917c880e6560978d7ca1'
'0xbd064928cdd4fd67fb99917c880e6560978d7ca1'
> v = '0xde0b6b3a7640000'
'0xde0b6b3a7640000'
> v = BN(v)
BigNumber { _hex: '0x0de0b6b3a7640000', _isBigNumber: true }
> v = v[Object.keys(v)[0]]
'0x0de0b6b3a7640000'
> d = '0x'
'0x'
> d = BN(d)
Uncaught:
Error: invalid BigNumber string (argument="value", value="0x", code=INVALID_ARGUMENT, version=bignumber/5.7.0)        
    at Logger.makeError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:238:21)
    at Logger.throwError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:247:20)
    at Logger.throwArgumentError (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\logger\lib\index.js:250:21)   
    at BigNumber.from (F:\MIO\Paym4It\RSK-to-BTC\node_modules\@ethersproject\bignumber\lib\bignumber.js:199:27) {     
  reason: 'invalid BigNumber string',
  code: 'INVALID_ARGUMENT',
  argument: 'value',
  value: '0x'
}
> var tx2 = await tnet.getTransaction('0x22b9b6b71bb8d836661bfaac21ad6a9a289af8875f0a70eb869aca005bf549d5');
undefined
> tx2.data
'0x'
> var Z = encode([tx2.data]);
undefined
> d
'0x'
> var Z = encode([n,gP,gL,t,v,d]);
undefined
> Z
'0xec8201e7852e90edd00083030d4094bd064928cdd4fd67fb99917c880e6560978d7ca1880de0b6b3a764000080'
> expected = '0x' + 'ec8201e7852e90edd00083030d4094bd064928cdd4fd67fb99917c880e6560978d7ca1880de0b6b3a764000080';
'0xec8201e7852e90edd00083030d4094bd064928cdd4fd67fb99917c880e6560978d7ca1880de0b6b3a764000080'
> Z == expected
true
>