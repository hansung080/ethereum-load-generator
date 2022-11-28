import program from "commander";
import * as loadgen from "./src";
import config from "./config";

program
    .option("-c, --count [value]", "the count of sending transactions (0: infinite)")
    .option("-i, --interval [value]", "the interval of sending transactions (millisecond)")
    .option("-n, --network [value]", "select a network defined in config.ts")
    .parse(process.argv);

async function main() {
    let {
        count,
        interval,
        network,
    } = program;

    if (!count) count = config["load"]["count"];
    if (!interval) interval = config["load"]["interval"];
    if (!network) network = config["network"];

    console.log("========== Load Generator Start ==========");
    console.log(" - count:    " + count);
    console.log(" - interval: " + interval);
    console.log(" - network:  " + network);
    console.log("Transactions are being sent...");

    const target: Object = config["networks"][network];
    loadgen.setNetwork(target);
    const result: string = await loadgen.loadData(Number(count), Number(interval), target["sender"]);
    console.log(" - result:   " + result);
    console.log("==========  Load Generator End  ==========");
    process.exit(0);
}
main();