const increment = (function() {
 return function increment(number, value = 1) {
    return number + value;
    };
})();
  console.log(increment(5, 2)); 
  console.log(increment(5)); 

//Output:
// 7, 6


const sum = (function() {
 return function sum(...args) {
      return args.reduce((a, b) => a + b, 0);
 };
})();
  
console.log(sum(1, 2, 3, 4));

//Output:
// 10

