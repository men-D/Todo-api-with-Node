var express = require("express"),
    router  = express.Router(),
    db      = require("../models"),
    helpers = require("../helpers/todos");

router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodo);

router.route("/:todoId")
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.removeTodo);
    
module.exports = router;    
    