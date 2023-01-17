'use strict';

const expect = require('chai').expect;
const { assert } = require('chai');
const ethConverter = require('../index');

describe('#ethConverter', ()=> {
    it('should convert single digits', ()=> {
        const result = ethConverter(1);
        // expect(result).to.equal('1000000000000000000');
        assert.equal(result, '1000000000000000000');
    });
})