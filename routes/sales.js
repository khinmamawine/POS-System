var express = require('express');
var router = express.Router();
var Showroom= require('../model/Showroom');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/staff',(req,res)=>{
  res.render('staff');
});

router.get('/saleadd',(req,res)=>{
  Showroom.find({},function(err,rtn){
    if(err) throw err;
console.log(rtn);
  res.render('Sales',{showroom:rtn});
});
});

router.get('/detail/:id',function(req,res,next){
Showroom.findById(req.params.id,function(err,rtn){
    if(err) throw err;
    console.log(rtn);
      res.render('saledetail',{showroom:rtn});
});
});
router.get('/changestaff',(req,res)=>{
  res.render('changestaff');
});
router.get('/salevoucher',(req,res)=>{
  res.render('SaleVoucher');
});

router.post('/checkbar',(req,res)=>{
  Showroom.findOne({barCode:req.body.barcode},(err,rtn)=>{
    if(err) throw err;
    res.json({data:rtn});
})
});

module.exports = router;
