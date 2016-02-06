'use strict';

var test = require('tape');

var postalCode = require('./index');

test('Those postal codes must be valid', function (t) {
  t.plan(2)
  t.equal(postalCode.validate('10188'), true);
  t.equal(postalCode.validate('49080'), true);
});

test('Those postal codes must be invalid', function (t) {
  t.plan(6)
  t.equal(postalCode.validate('90000'), false);
  t.equal(postalCode.validate('00000'), false);
  t.equal(postalCode.validate('1abcd'), false);
  t.equal(postalCode.validate('123456'), false);
  t.equal(postalCode.validate('1234'), false);
  t.equal(postalCode.validate('1 2 3 4'), false);
});

test('Those dirty postal codes must be cleaned', function (t) {
  t.plan(1)
  t.equal(postalCode.clean(' 123 45 '), '12345');
});
