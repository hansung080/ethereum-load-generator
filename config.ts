const config = {
    load: {
        count: 0,
        interval: 0
    },
    network: "quorum_raft",
    networks: {
        quorum_raft: {
            endpoint: "http://127.0.0.1:21200",
            sender: "0x6f8e4674c80c76833daa6fc1f19343c7a4909de8",
            contracts: {
                SimpleStorage: "0xb6cCA6200BD807a2D370BE811C5921b70d981565"
            }
        }
    }
};

export default config;