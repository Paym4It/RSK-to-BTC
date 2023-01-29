# SCRIPT TO OBTAIN POSSIBLE BITCOIN ADDRESSES FROM RSK TRANSACTIONS
## Requirements
node v16.x.y
python  3.m.n
git bash 2.u.v
## How to install
1°.- `$ git clone https://github.com/Paym4It/RSK-to-BTC ./MY_SCRIPT`
2°.- `$ cd MY_SCRIPT`
3°.- `$ npm run set`
## How to use:
### To know the possible BTC addresses linked to the signer of a RSK mainnet Transaction:
`$ node index m <transaction-hash>`
### To know the possible BTC addresses linked to the signer of a RSK testnet Transaction:
`$ node index t <transaction-hash>`