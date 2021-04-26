function FizzBuzz() {}

// only one arg is passed in, and it's a number
// 3 different conditionals
// if i % 3 equals 0, return 'fizz'
// if no conditions met, return i
FizzBuzz.call = function(i) {
  if ( i % 3 == 0 && i % 5 == 0 ) {
    return 'fizzbuzz'
  } else if ( i % 3 == 0 ) {
    return 'fizz'
  } else if ( i % 5 == 0 ) {
    return 'buzz'
  }
}
  //else { }}

module.exports = FizzBuzz;
