var express = require('express');
var router = express.Router();

var story = require('../story/story.js');

// GET create story page.
router.get('/create/', story.create);  



module.exports = router;

