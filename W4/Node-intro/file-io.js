//recreate "cat" in js

//old way to impor the fielsystem standard library
const fs = require("fs");

//error first pattern, many asynchronous Node JS function follow this
fs.readFile("simpsons.txt", "utf-8", function (error, data) {
  console.log(data);
});
