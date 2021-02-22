describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('returns fizz when number is divisible by 3', function() {
      expect(fizzBuzz.number(3)).toEqual('Fizz');
    });
  }); 
});

