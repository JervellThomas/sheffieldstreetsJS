var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/story', function(req,res) {
  res.redirect('/story');
});

module.exports = router;
