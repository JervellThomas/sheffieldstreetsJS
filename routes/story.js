var express = require('express');
var router = express.Router();
var story = require('../story/index.js');


console.log(story);//helps with showing the story object 

// GET create story page.
router.get('/create', story.create.get);  
//POST  create story page
router.post('/create', story.create.post);


//delete story page 
router.get('/delete', story.del);



module.exports = router;
