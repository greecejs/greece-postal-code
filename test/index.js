'use strict';

var chai = require('chai');

var postalCode = require('../index');

var expect = chai.expect;

describe('Those postal codes', function() {
  it('should be valid', function() {
    expect(postalCode.validate('10188')).to.be.true;
    expect(postalCode.validate('49080')).to.be.true;
  });
});

describe('Those postal codes', function() {
  it('should be invalid', function() {
    expect(postalCode.validate('90000')).to.be.false;
    expect(postalCode.validate('00000')).to.be.false;
    expect(postalCode.validate('1abcd')).to.be.false;
    expect(postalCode.validate('123456')).to.be.false;
    expect(postalCode.validate('1234')).to.be.false;
    expect(postalCode.validate('1 2 3 4')).to.be.false;
  });
});

describe('Those dirty postal codes', function() {
  it('should be cleaned', function() {
    expect(postalCode.clean(' 123 45 ')).to.equal('12345');
  });
});
