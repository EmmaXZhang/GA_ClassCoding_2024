var express = require("express");
var router = express.Router();
var todosCtrl = require("../controllers/todos");

//define a route for spacific requst. all acutal paths start with "/todos"
//get /todos
router.get("/", todosCtrl.index);
//get todos/:id
router.get("/:id", todosCtrl.show);

module.exports = router;
