var express = require('express');
var router = express.Router();
var Showroom= require('../model/Showroom');
var Company=require('../model/Company');
var Warehouse=require('../model/Warehouse');
var Staffmanagement=require('../model/Staffmanagement');
var Expanses=require('../model/Expanses');
var Admin=require('../model/Admin');
var Search=require('../model/Search');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('panel', { title: 'Express' });
});

router.get('/admin',(req,res)=>{
  res.render('admin');
});
var auth = function(req, res, next) {
  if (req.session.users.roll == "admin") {
    return next();
  } else{
    res.redirect('/login');
    }
};
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', function(req, res, next) {
  var admin = new Admin();
  Admin.findOne({email:req.body.email},function(err,rtn){
    if(err) throw err;
    if(rtn == null){
      admin.name = req.body.name;
      admin.email = req.body.email;
      admin.password = req.body.password;
      admin.save(function (err2,rtn2) {
        if(err2) throw err2;
        res.redirect('/login');
      })
    }else{
      res.redirect('/signup');
    }
  });
});

router.post('/login', function(req, res, next) {
  Admin.findOne({email:req.body.email},function(err,rtn){
    if(err) throw err;
    console.log(rtn,req.body.password);
    if(rtn == null || rtn.password != req.body.password){
      res.redirect('/login')
    }else{
      req.session.users = {email: rtn.email, name: rtn.name, roll: "admin"};
      res.redirect('/admin');

    }
  });
});



router.get('/stafflogin',(req,res)=>{
  res.render('staffLogin');
});


router.post('/stafflogin', function(req, res, next) {
  Staffmanagement.findOne({Email:req.body.email},function(err,rtn){
    if(err) throw err;
    console.log(rtn,req.body.email);
    if(rtn == null || rtn.Password != req.body.password){
      res.redirect('/stafflogin')
    }else{
      req.session.users = {email: rtn.Email, name: rtn.Name, roll: "management",  id:rtn._id};
      res.redirect('/sales/staff');

    }
  });
});





module.exports = router;
