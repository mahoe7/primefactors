/* globals describe, it, expect, primeFactorFinder, primeFactors */

describe("PrimeFactors", function() {
  var number = 600851475143;
  var numZero = 0;
  var string = "Hi";

  it("should compute the largest prime factor of the given number.", function() {
    expect(function(){primeFactors(number);}).toEqual(6857);
  });

  it("should return 0 if the given number is 0.", function() {
    expect(function(){primeFactors(numZero);}).toEqual(0);
  });

  it("should throw an error if the given number is not a number.", function() {
    expect(function(){primeFactors(string);}).toThrowError("Not a number.");
  });
});
