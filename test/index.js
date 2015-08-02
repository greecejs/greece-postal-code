'use strict';

const chai = require('chai');

const plate = require('../index');

const expect = chai.expect;

describe('Those postal codes', function() {
  it('should be valid', function() {
    expect(plate.validate('10188')).to.be.true;
    expect(plate.validate('49080')).to.be.true;
  });
});

describe('Those postal codes', function() {
  it('should be invalid', function() {
    expect(plate.validate('90000')).to.be.false;
    expect(plate.validate('00000')).to.be.false;
    expect(plate.validate('1abcd')).to.be.false;
    expect(plate.validate('123456')).to.be.false;
    expect(plate.validate('1234')).to.be.false;
    expect(plate.validate('1 2 3 4')).to.be.false;
  });
});

describe('Those dirty postal codes', function() {
  it('should be cleaned', function() {
    expect(plate.clean(' 123 45 ')).to.equal('12345');
  });
});
