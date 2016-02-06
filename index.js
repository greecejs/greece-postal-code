'use strict';

exports.validate = function(number) {
  // Greek postal code must be 5 digits long and shouldn't start with 0 or 9.
  var CODE_REGEX = /^[12345678][0-9]{4}$/;
  return CODE_REGEX.test(number);
};

exports.clean = function(number) {
  return number.replace(/\s+/g, '');
};
