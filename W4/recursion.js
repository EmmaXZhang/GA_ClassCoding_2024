//iteration

// const countdownIterative = (limit = 10) => {
//   while (limit >= 0) {
//     console.log(limit);
//     limit -= 1;
//   }
//   console.log("blast off");
// };

// countdownIterative();

// //recursive
// const countdownRecursive = (limit = 10) => {
//   //if statement -> Base Case reached? -> finish
//   if (limit < 0) {
//     console.log("blast off");
//   } else {
//     //print current number
//     console.log(limit);
//     //call the function again BUT one step closer to the base case
//     countdownRecursive(limit - 1);
//   }
// };

//factorial
// 5 != 5*4*3*2;

// function factorial(num) {
//   let result = 1;
//   if (num === 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

//fibonacci
const fibonacciRecursive = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
};

console.log(fibonacciRecursive(4));
