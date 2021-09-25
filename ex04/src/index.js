function sumFibonacci(num) {
    var firstN = 0;
    var secondN = 1;
    var result = 0;
    while (secondN <= num) {
      if (num === 1) {
        result = 1;
      } else if (secondN % 2 !== 0) {
        result += secondN;
      }
      secondN += firstN;
      firstN = secondN - firstN;
    }
    return result;
  }
 
  console.log(sumFibonacci(1)); 
  console.log(sumFibonacci(10));
  console.log(sumFibonacci(20));
  console.log(sumFibonacci(4));
  console.log(sumFibonacci(-5));
  
  module.exports = sumFibonacci;