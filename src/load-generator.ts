import Web3Connector from "./common/web3-connector";
import SimpleStorage from "./contracts/simple-storage";
const data = require("../data.json");

export const setNetwork = (network: Object) => {
    Web3Connector.setProvider(network["endpoint"]);
    SimpleStorage.address = network["contracts"]["SimpleStorage"];
}

export const setData = (key: string, value: string, from: string): Promise<any> => {
    return SimpleStorage.instance.set(key, value, from);
}

export const getData = (key: string): Promise<string> => {
    return SimpleStorage.instance.get(key);
}

export const loadData = (count: number, interval: number, from: string): Promise<string> => {
    return new Promise<string>(resolve => {
        const value: string = JSON.stringify(data);
        let i: number = 0;
        const id = setInterval(() => {
            if (count !== 0 && i >= count) {
                clearInterval(id);
                resolve("success");
                return;
            }

            setData(String(Math.random()), value, from);
            ++i;
        }, interval);
    });
}