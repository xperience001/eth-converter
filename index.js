'use strict';
const { default: Web3 } = require('web3');

/**
 * Converts integers to different units in ethereum
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

 module.exports = (n)=> {
    return Web3.utils.toWei(n, 'ether');
};