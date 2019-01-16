var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://mendi:mendi123@ds041347.mlab.com:41347/todo_api', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");