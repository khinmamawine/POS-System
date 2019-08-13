var express = require('express');
var router = express.Router();
var Purchase=require('../model/Purchase');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
