// SPDX-License-Identifier: MIT
pragma solidity ^0.7.1;

contract SimpleStorage {
    mapping(string=>string) private map;

    function set(string memory key, string memory value) public {
        map[key] = value;
    }

    function get(string memory key) public view returns (string memory) {
        return map[key];
    }
}
