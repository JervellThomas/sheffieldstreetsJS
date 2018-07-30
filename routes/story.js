var express = require('express');
var router = express.Router();

var story = require('../story/index.js');

// GET create story page.
router.get('/create/', story());  



module.exports = router;

