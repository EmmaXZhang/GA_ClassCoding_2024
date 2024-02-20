var express = require("express");
var router = express.Router();
var todosCtrl = require("../controllers/todos");

//define a route for spacific requst. all acutal paths start with "/todos"
router.get("/", todosCtrl.index);

module.exports = router;
