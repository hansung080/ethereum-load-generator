# Ethereum Load Generator

## Supportable Blockchains
- Ethereum
- Quorum

## Prerequisites
- Node.js v14.16.0
- NPM v6.14.11
- TypeScript (tsc) v4.2.3
- ts-node v9.1.1

First, install Node.js and NPM. Then, enter the following commands on your terminal to install TypeScript and ts-node.
```sh
$ sudo npm install -g typescript@4.2.3
$ sudo npm install -g ts-node@9.1.1
```

## Clone Repo. & Install Dep.
```sh
$ git clone https://github.com/hansung080/ethereum-load-generator.git
$ cd ethereum-load-generator
$ npm install
```

## Usage
To print the loadgen options, enter the help command on your terminal.
```sh
$ ts-node loadgen.ts --help
Usage: loadgen [options]

Options:
  -c, --count [value]     the count of sending transactions (0: infinite)
  -i, --interval [value]  the interval of sending transactions (millisecond)
  -n, --network [value]   select a network defined in config.ts
  -h, --help              display help for command
```

## Run
You need to write the [config.ts] file before you run the `Ethereum Load Generator`.
And, enter the following command on your terminal to run it. 
```sh
$ ts-node loadgen.ts
```

[config.ts]: <./config.ts>
