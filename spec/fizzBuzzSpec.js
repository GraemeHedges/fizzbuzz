describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('returns Fizz when number is divisible by 3 - testing with 3', function() {
      expect(fizzBuzz.number(3)).toEqual('Fizz');
    });

    it('returns Fizz when number is divisible by 3 - testing with 9', function() {
      expect(fizzBuzz.number(9)).toEqual('Fizz');
    });
  });
  
  describe('multiple of 5', function() {
    it('returns Buzz when a number is divisible by 5 - testing with 5', function() {
      expect(fizzBuzz.number(5)).toEqual('Buzz');
    });

    it('returns Buzz when a number is divisible by 5 - testing with 10', function() {
      expect(fizzBuzz.number(10)).toEqual('Buzz');
    });
  });

  describe('multiple of 3 and 5', function() {
    it('returns FizzBuzz when a number is divisible by 5 and 3 - testing with 15', function() {
      expect(fizzBuzz.number(15)).toEqual('FizzBuzz');
    });
  });
});
