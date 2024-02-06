// Exercise 1
// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.

function writeDing() {
  console.log("Ding!");
}

let timerId = setTimeout(writeDing, 3000);

// Exercise 2
// Javascript arrays have a built-in sort method that can take a callback to tell it how to compare the things you want to sort.
// Write the sorting callback as a named function declaration
// Write the callback function to provide to the sort method so that
// the following code sorts the words from shortest to longest.
// Check that logging words now outputs
// ["nice", "short", "medium", "lengthy", "delicious"]
// The sort method sorts "in place", that is, it modifies the array

const words = ["short", "medium", "delicious", "nice", "lengthy"];

//solution 1
let wordsOb = {};
words.forEach(function (word) {
  wordsOb[word] = word.length;
});

//convert object to array then sort
let wordArr = Object.entries(wordsOb);
wordArr.sort((a, b) => a[1] - b[1]); //sort their value, key =0, value=1

// console.log(wordArr);

//solution 2
words.sort(sortByLength);
function sortByLength(a, b) {
  return a.length - b.length;
}

// Exercise 3
// Filter the words array from above to create a new array
// named longWords that includes only the words with 7 or more
// characters

const longWords = words.filter(/* write an anonymous inline function here */);

// Check that logging longWords outputs
// ["lengthy", "delicious"]
