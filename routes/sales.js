var express = require('express');
var router = express.Router();
var Showroom= require('../model/Showroom');
var Category = require('../model/Category');
var Brand = require('../model/Brand');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/staff',(req,res)=>{
  res.render('staff');
});

router.post('/finditem',(req,res)=>{
  Showroom.find({$and:[{itemType:req.body.type},{brand_id:req.body.brand}]},function (err,rtn) {
    if(err) throw err;
    res.json({data:rtn})
  })

})

router.get('/saleadd',(req,res)=>{
  Brand.find({},function(err,rtn){
    if(err) throw err;
    Category.find({},function (err2,rtn2) {
      if(err2) throw err2;
      res.render('Sales',{brand:rtn,category:rtn2});
    });
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
  Showroom.findOne({barCode:req.body.barcode}).populate('brand_id').exec((err,rtn)=>{
    if(err) throw err;
    res.json({data:rtn});
})
});

router.post('/search',(req,res)=>{
  Showroom.find({brandName:req.body.brandname,itemType:req.body.itemtype},(err,rtn)=>{
    if(err) throw err;
    res.json({data:rtn});
})
});
module.exports = router;
