var assert = require('assert');
const FizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', function() {
  describe('#call()', function() {
    it('should return "fizz" when arg is a multiple of 3', function() {
      assert.equal(FizzBuzz.call(9), 'fizz');
      assert.equal(FizzBuzz.call(33), 'fizz');
    });

    it('should return "buzz" when arg is a multiple of 5', function() {
      assert.equal(FizzBuzz.call(10), 'buzz');
      assert.equal(FizzBuzz.call(25), 'buzz');
    });

    it('should return "fizzbuzz" when arg is a multiple of both 3 and 5', function() {
      assert.equal(FizzBuzz.call(15), 'fizzbuzz');
      assert.equal(FizzBuzz.call(30), 'fizzbuzz');
    });
  });
});
