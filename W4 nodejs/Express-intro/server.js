// load express
const express = require("express");
const path = require("path");

//require the TODO database
const todoDb = require("./data/todo-db");

//create our express app
const app = express();

//route handler
//define a "root"-"/"" route directly on app
app.get("/", function (req, res) {
  res.redirect("/todos");
});

app.get("/home", function (req, res) {
  //template file:home.ejs
  res.render("home"); //refer to home.ejs
});

app.get("/todos", function (req, res) {
  const todos = todoDb.getAll();
  //todos folder/tempalte file , data
  res.render("todos/index", { todos });
});

//configre the app (app.set),  set various application settings.
app.set("view engine", "ejs"); //using EJS templates for rendering your views (key-value)
app.set("views", path.join(__dirname, "views")); //set a proper name format: current directory name, any name you want to add behind.

//mount middleware (app.use)

//mount route

//start a server: app.listen(3000,....)
//the listen() method is used to bind and listen for connections on the specified host and port 3000.
//Express.js application will start a server that listens for incoming HTTP requests on port 3000, and when a request is received,
//it will log "listening on port 3000" to the console.
app.listen(3000, function () {
  console.log("listening on port 3000");
});
