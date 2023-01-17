# eth-unit-converter

An NPM package which helps you convert your transaction values to different units such as Wei, Kwei, Mwei, Gwei and so on.

# Installation

    npm install eth-unit-converter

# Usage

    const ethConverter = require('eth-unit-converter');

    const convertedNum = ethConverter(35, ether);

Output should be 35,000,000,000,000,000,000,

# Tests

    npm run test

# Contributing

Feel free to contribute