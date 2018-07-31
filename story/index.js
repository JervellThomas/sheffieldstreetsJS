//'story/index.js'

var create = require('./create');
var del = require('./delete');



//Places all story controlles in the index 
//Rquire file to add functionality you must require and add to the object below.


//functionality exported to 'routes/story.js'
module.exports = {del, create};

