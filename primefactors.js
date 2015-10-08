/**
 * Created by Michael on 10/8/2015.
 */

/* exported primeFactors */

/**
 * primeFactors returns the largest prime factor of a given number.
 * @param num is the given number.
 * @returns {*} the largest prime factor.
 */
var primeFactors = function(num) {
  var factors = [];
  var divide = 2;
  var primeNum;

  if(num === 0) {
    primeNum = 0;
  }
  else if(isNaN(num)) {
    throw new Error("Not a number.");
  }
  else {
    while (num > 1) {
      while ((num % divide) === 0) {
        factors.push(divide);
        num /= divide;
      }
      divide += 1;
    }
    primeNum = factors[factors.length - 1];
  }
  return primeNum;
};

var x = primeFactors(600851475143);
console.log(x);
var x2 = primeFactors(0);
console.log(x2);
console.log(primeFactors("Hi"));