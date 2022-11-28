import * as loadgen from "../src";
import config from "../config";
require("chai").should();

const network: string = config["network"];
const target: Object = config["networks"][network];
loadgen.setNetwork(target);

describe("Load Generator Test", () => {
    it("should set and get the correct data", async () => {
        const key: string = "aaa";
        const value: string = "100";

        await loadgen.setData(key, value, target["sender"]);
        const actual: string = await loadgen.getData(key);
        actual.should.equal(value);
    });
});