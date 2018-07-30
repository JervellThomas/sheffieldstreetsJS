var express = require('express');
var router = express.Router();

var story = require('../story/index.js');

// GET catalog home page.
router.get('/story/create/', story.create);  



module.exports = router;

