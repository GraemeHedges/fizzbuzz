// i = 1

// while i < 21
//   if i % 3 == 0 && i % 5 == 0
//     puts "FizzBuzz"
//   elsif i % 3 == 0
//     puts "Fizz"
//   elsif i % 5 == 0
//     puts "Buzz"
//   else
//     puts i
//   end
//   i += 1
// end

class FizzBuzz{

  count(){
    // does a count up to a given number
  };

  number(i){
    if (i % 3 === 0 && i % 5 === 0){
      return('FizzBuzz')
    } else if (i % 3 === 0) {
      return('Fizz')
    } else if (i % 5 === 0) {
      return('Buzz')
    } else {
      return i
    }
  }
}