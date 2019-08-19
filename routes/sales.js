var express = require('express');
var router = express.Router();
var Showroom= require('../model/Showroom');
var Category = require('../model/Category');
var Brand = require('../model/Brand');
var Sale = require('../model/Sale');
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
router.get('/salevoucher/:id',(req,res)=>{
  console.log(req.session.users);
  Sale.findById(req.params.id).populate('product.product_id').exec((err,rtn)=>{
    if(err) throw err;
    console.log(rtn);
    res.render('SaleVoucher',{sale:rtn,sellerId:req.session.users.id,sellerName:req.session.users.name});
  })
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

router.post('/checkout',(req,res)=>{
  var sale = new Sale();
  sale.product = req.body.product;
  sale.total = req.body.tol;
  sale.save((err,rtn)=>{
    if(err) throw err;
    console.log(rtn);
    res.json({
      status:true,
      id:rtn._id
    })
  })
})
module.exports = router;
