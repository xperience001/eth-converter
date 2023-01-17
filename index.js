'use strict';

/**
 * Converts integers to different units in ethereum
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

module.exports = (n, unit)=> {
    if(unit == ether){
        return (n * (10^18))
    }else if(unit == finney){
        return (n * (10^15))
    }else if(unit == szabo){
        return (n * (10^12))
    }else if(unit == Gwei){
        return (n * 10^9)
    }else if(unit == Mwei){
        return (n * 10^6)
    }else if(unit == Kwei){
        return (n * 10^3)
    } else {
        return n
    }
};