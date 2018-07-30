var express = require('express');
var router = express.Router();

var story = require('../story/index.js');

// GET create story page.
router.get('/create/', create);  

//delete story page 
//router.get('/delete', story.del);



module.exports = router;

