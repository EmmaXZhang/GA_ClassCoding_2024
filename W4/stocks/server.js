const express = require("express");
const server = express();
const yahooFinance = require("yahoo-finance2").default;

//configure our server,set server display format
server.set("view engine", "ejs");

//tell server about our routes and the functions that shoudl run when a brwoser rqust those routes
server.get("/", function (req, res) {
  //views/ is assumed by default
  res.render("home");
});

server.get("/info", (req, res) => {
  //figure out the stock the user is searching for - req.query.stockCode (after ? is query)
  //GET THE STOCK PRICE
  yahooFinance.quote(req.query.stockCode).then((results) => {
    console.log(results.regularMarketPrice);
    //render the stock price
    res.render("info");
  });
});

//attach the server to a port
server.listen(3456, () => {
  console.log("server started at http://localhost:3456/");
});
