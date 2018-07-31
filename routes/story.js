var express = require('express');
var router = express.Router();

var story = require('../story/index.js');

console.log(story);
// GET create story page.
router.get('/create/', story.create.module);  

//delete story page 
router.get('/delete', story.del.module);



module.exports = router;
