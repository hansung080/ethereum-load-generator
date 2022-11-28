const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", (accounts) => {
    it("should set and get the correct value", async () => {
        const storage = await SimpleStorage.deployed();
        const key = "abc";
        const value = "123";

        await storage.set(key, value);
        const actual = await storage.get.call(key);
        assert.equal(actual, value, "incorrect actual value");
    });
});