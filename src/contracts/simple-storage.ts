import { Contract } from "web3-eth-contract";
import Web3Connector from "../common/web3-connector";
const SimpleStorageABI = require("./abi/SimpleStorage.json");

export default class SimpleStorage {
    private static _instance: SimpleStorage;
    private static _address: string;
    private _contract: Contract;

    private constructor() {
        const web3 = Web3Connector.instance.web3;
        this._contract = new web3.eth.Contract(SimpleStorageABI, SimpleStorage._address);
    }

    public static get instance(): SimpleStorage {
        if (!SimpleStorage._instance) SimpleStorage._instance = new SimpleStorage();
        return SimpleStorage._instance;
    }

    public static get address(): string {
        return SimpleStorage._address;
    }

    public static set address(address: string) {
        SimpleStorage._address = address;
    }

    public set(key: string, value: string, from: string): Promise<any> {
        return this._contract.methods.set(key, value).send({from});
    }

    public get(key: string): Promise<string> {
       return this._contract.methods.get(key).call();
    }
}