//recreate "cat" in js

//old way to impor the fielsystem standard library,error first pattern
const fs = require("fs");

//many asynchronous Node JS function follow this
fs.readFile("simpsons.txt", "utf-8", function (error, data) {
  //error first parameter, dealing with error first
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
