var create = require('./create');
var del = require('./delete');

var story = function(req, res, next) {
  create();
  next();
}

module.exports = story;


