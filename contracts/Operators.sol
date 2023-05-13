// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

// Basic Math
contract Operators1 {
    function add(uint a, uint b) external pure returns(uint) {
        return a + b;
    }

    function sub(uint a, uint b) external pure returns(uint) {
        return a - b;
    }

    function mul(uint a, uint b) external pure returns(uint) {
        return a * b;
    }

    function div(uint a, uint b) external pure returns(uint) {
        return a / b;
    }

    function exp(uint a, uint b) external pure returns(uint) {
        return a ** b;
    }

    function mod(uint a, uint b) external pure returns(uint) {
        return a % b;
    }

    function increment(uint a) external pure returns(uint) {
        a++;
        return a;
    }

    function decrement(uint a) external pure returns(uint) {
        a --;
        return a;
    }

    function mathExample() external pure returns(uint) {
        uint a;
        a = a + 1; // 1
        a ++; // 2
        a = a * 2; // 4
        a = a ** 2; // 16
        a = a / 2; // 8
        a = a - 1; // 7
        a --; // 6
        return a;
    }
}

// Comparison
// Note: many types can be compared besides numbers
// This simply shows the operators
contract Operators2 {
    function eq(uint a, uint b) external pure returns(bool) {
        return a == b;
    }

    function notEq(uint a, uint b) external pure returns(bool) {
        return a != b;
    }

    function gt(uint a, uint b) external pure returns(bool) {
        return a > b;
    }

    function lt(uint a, uint b) external pure returns(bool) {
        return a < b;
    }

    function gtOrEq(uint a, uint b) external pure returns(bool) {
        return a >= b;
    }

    function ltOrEq(uint a, uint b) external pure returns(bool) {
        return a <= b;
    }

    // Example of non-integer comparison
    function checkAddress() external pure returns(bool) {
        address address1 = 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB;
        address address2 = 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D;
        return(address1 == address2);
    }
}

// Logical Operators
contract Operators3 {
    function and(bool a, bool b) external pure returns(bool) {
        return a && b;
    }

    function or(bool a, bool b) external pure returns(bool) {
        return a || b;
    }

    function not(bool a) external pure returns(bool) {
        return !a;
    }

    function comparisonExample() external pure returns(bool) {
        return (1 + 1 == 2) && (2 + 2 == 4);
    }
}
