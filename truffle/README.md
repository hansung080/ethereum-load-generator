# Ethereum Contracts

## Supportable Blockchains
- Ethereum
- Quorum

## Prerequisites
- Node.js v14.16.0
- NPM v6.14.11
- Truffle v5.1.44
- Ethereum
- Quorum v22.4.4

First, install Node.js and NPM. Then, enter the following command on your terminal to install Truffle.
```sh
$ sudo npm install -g truffle@5.1.44
```

## Clone Repo.
```sh
$ git clone https://github.com/hansung080/ethereum-load-generator.git
$ cd ethereum-load-generator/truffle
```

## Compile & Migrate Contracts
You need to write the [truffle-config.js] file before you compile and migrate the contracts. And, enter the following command on your terminal to compile the contracts. After compiling, the JSON files ([contract-name].json) will be created on the derectory `[project-root]/build/contracts`.
```sh
$ truffle compile -all
```

Enter the following command on your terminal to migrate the contracts to the network you selected as a option. After migration, the contract address will be printed on your terminal.
```sh
$ truffle migrate --reset --network [network]
```

## Invoke Contracts
To invoke the contracts you deployed to the network, you can use the `Truffle Console`.
```sh
$ truffle console --network [network]
```

[truffle-config.js]: <./truffle-config.js>