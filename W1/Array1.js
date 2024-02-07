let movie = ["Best In Show", "Alien", "Contact"];
let removedMovie = movie.splice(2, 1, "The Matrix", "Gladiator");

// console.log(movie);
/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = [];

// console.log("Exercise 1 Result:\n", foods);

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

// Complete Exercise 2 below...

foods.push("pizza", "cheeseburger");

// console.log("Exercise 2 Result:\n", foods);

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

// Complete Exercise 3 below...
foods.unshift("taco");
// console.log("Exercise 3 Result:\n", foods);

/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
*/

// Complete Exercise 4 below...
let favFood = foods[1];
// console.log("Exercise 4 Result:\n", favFood);

/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

// Complete Exercise 5 below...
foods.splice(2, 0, "tofu");
// console.log("Exercise 5 Result:\n", foods);

/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

// Complete Exercise 6 below...
foods.splice(1, 1, "sushi", "cupcake");
// console.log("Exercise 6 Result:\n", foods);

/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
*/

// Complete Exercise 7 below...
let yummy = foods.slice(1, 3);
// console.log("Exercise 7 Result:\n", yummy);

/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

// Complete Exercise 8 below...
let soyIdx = foods.indexOf("tofu");
// console.log("Exercise 8 Result:\n", soyIdx);

/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

// Complete Exercise 9 below...
let allFoods = foods.join("->");
// console.log("Exercise 9 Result:\n", allFoods);

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...
let hasSoup = foods.includes("soup");
// console.log("Exercise 10 Result:\n", hasSoup);

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
let odds = [];
// Complete Exercise 11 below...
nums.forEach(function (num) {
  if (num % 2 !== 0) {
    odds.push(num);
  }
});
// console.log("Exercise 11 Result:\n", odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to **one** of the following arrays: fizz, buzz or fizzbuzz - based upon the following:
    - Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
    - Add to the fizz array if the number is evenly divisible by 3.
    - Add to the buzz array if the number is evenly divisible by 5.
*/

// Complete Exercise 12 below...
let fizzbuzz = [];
let fizz = [];
let buzz = [];

nums.forEach(function (num) {
  if (num % 5 === 0 && num % 3 === 0) {
    fizzbuzz.push(num);
  } else if (num % 3 === 0) {
    fizz.push(num);
  } else {
    buzz.push(num);
  }
});
// console.log("Exercise 12 Results:");
// console.log("  fizz:", fizz);
// console.log("  buzz:", buzz);
// console.log("  fizzbuzz:", fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];

// Complete Exercise 13 below...
let numList = numArrays[numArrays.length - 1];
// console.log("Exercise 13 Result:\n", numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...
let num = numArrays[2][1];
// console.log("Exercise 14 Result:\n", num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...
let total = 0;
numArrays.forEach(function (arr) {
  arr.forEach(function (num) {
    total = total + num;
  });
});
// console.log("Exercise 15 Result:\n", total);

//-------------------------------------------------------------------
//Function Lab Practice

// 1.(completed above) Define a function, as a function declaration,
//maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}
// console.log(maxOfTwoNumbers(3, 9));

// 2.Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = function (num1, num2, num3) {
  let maxNum;
  if (num1 > num2) {
    maxNum = num1;
  } else {
    maxNum = num2;
  }
  if (num3 > maxNum) {
    return (maxNum = num3);
  } else {
    return maxNum;
  }
};
// console.log(maxOfThree(1, 7, 6));

// 3.Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
  if (
    char.toUpperCase() === "A" ||
    char.toUpperCase() === "E" ||
    char.toUpperCase() === "I" ||
    char.toUpperCase() === "O" ||
    char.toUpperCase() === "U"
  ) {
    return "true";
  } else {
    return "false";
  }
}
// console.log(isCharAVowel("i"));

// 4.Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function (arr) {
  let sum = 0;
  arr.forEach(function (num) {
    sum += num;
  });
  return sum;
};
// console.log(sumArray([2, 4, 5]));

// 5.Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
function multiplyArray(arr) {
  let result = 1;
  arr.forEach(function (num) {
    result *= num;
  });
  return result;
}
// console.log(multiplyArray([2, 4, 5]));

// 6.Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numArgs = function (...nums) {
  return nums.length;
};

// console.log(numArgs(1, 2, 3, 4));

// 7.Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string “ratskcor”.
function reverseString(string) {
  return string.split("").reverse().join("");
}

// console.log(reverseString("rockstar"));

// 8.Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = function (arrOfStrings) {
  let longestString = arrOfStrings[0].length;
  for (let i = 1; i < arrOfStrings.length; i++) {
    if (arrOfStrings[i].length > longestString) {
      longestString = arrOfStrings[i].length;
    }
  }
  return longestString;
};
// console.log(longestStringInArray(["a", "ab", "bcdde"]));

// 9.Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments;
//and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(arrOfStrings, num) {
  let newArr = [];
  arrOfStrings.forEach(function (string) {
    if (string.length > num) {
      newArr.push(string);
    }
  });
  return newArr;
}

// console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));

//Map
const instructors = ["Alex", "Stephanie", "Daniel"];

const newInstructors = instructors.map(
  (instructor) => instructor + " is awesome."
);
console.log(newInstructors);
