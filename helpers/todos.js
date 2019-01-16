var db = require("../models");

exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.createTodo = function(req,res){
    db.Todo.create(req.body)
    .then(function(newtodo){
        res.json(newtodo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.getTodo = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.updateTodo = function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(updatedTodo){
        req.send("test");
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.removeTodo = function(req,res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: "we deleted it"});
    })
    .catch(function(err){
        res.send(err);
    });
};


module.exports = exports;