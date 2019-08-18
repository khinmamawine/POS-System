var express = require('express');
var router = express.Router();
var Company =require('../model/Company');
var Search=require('../model/Search')
var Showroom= require('../model/Showroom');
var Company=require('../model/Company');
var Warehouse=require('../model/Warehouse');
var Staffmanagement=require('../model/Staffmanagement');
var Expanses=require('../model/Expanses');
var Brand=require('../model/Brand');
var Category=require('../model/Category');
var multer = require('multer');
var upload = multer({ dest:'public/images/uploads'});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/inventoryadd',function(req,res){
  var showroom =new Showroom();
    showroom.itemType=req.body.itemtype;
    showroom.barCode=req.body.barcode;
    showroom.itemName=req.body.itemname;
    showroom.brand_id=req.body.brand_id;
    showroom.companyName=req.body.companyname;
     showroom.purchasePrice=req.body.purchaseprice;
    showroom.salePrice=req.body.saleprice;
    showroom.startDate=req.body.startdate;
    showroom.expDate=req.body.expdate;
    showroom.Qty=req.body.qty;
    showroom.Remark=req.body.remark;
    showroom.save(function(err,rtn){
      if(err) throw err;
      res.redirect('/admins/inventorylist');
    });
    });
    router.get('/inventorylist',function(req,res){
      Showroom.find({}).populate('brand_id').exec(function(err,rtn){
          if(err) throw err;
          Brand.find(function (err2,rtn2) {
            if(err2) throw err2;
            Category.find(function (err3,rtn3) {
              if(err3) throw err3
              res.render('inventorypage',{showroom:rtn,brand:rtn2,category:rtn3});
            })
          })

        });
      });



      router.post('/update', function(req,res){
              console.log('call');
              var update={
                itemType:req.body.itemtype,
                barCode:req.body.barcode,
                itemName:req.body.itemname,
                brand_id:req.body.brand_id,
                companyName:req.body.companyname,
                purchasePrice:req.body.purchaseprice,
                salePrice:req.body.saleprice,
                startDate:req.body.startdate,
                expDate:req.body.expdate,
                Qty:req.body.qty,
                Remark:req.body.remark,
             }
                Showroom.findByIdAndUpdate(req.body.id,{$set: update},function(err,rtn){
                if(err) throw err;
              console.log(rtn);
              res.redirect('/admins/inventorylist');
              });
            });


            router.get('/update/:id',function(req,res){
              console.log('calls ');
              Showroom.findById(req.params.id,function(err,rtn){
                if(err) throw err;
                Brand.find({},(err2,rtn2)=>{
                  if(err2) throw err2;
                  console.log(rtn);
                  res.render('updateinventory',{showroom:rtn,brand:rtn2});
                })

              });
            });

            router.get('/delete/:id',function(req,res){
            Showroom.findByIdAndRemove(req.params.id,function (err,rtn) {
              if (err) throw err;
              console.log(rtn);
              res.redirect('/admins/inventorylist');


            });
            });



router.post('/companyadd',function(req,res){
  var companies =new Company();
    companies.companyName=req.body.name;
    companies.companyAddress=req.body.address;
    companies.phoneNo=req.body.phoneno;
    companies.paidDate=req.body.paiddate;
    companies.totalCredit=req.body.total;
    companies.Remark=req.body.remark;
     companies.save(function(err,rtn){
      if(err) throw err;
      console.log(rtn);
      res.redirect('/admins/companylist');

    });
    });

router.get('/companylist',function(req,res){
Company.find(function(err,rtn){
    if(err) throw err;
    console.log(rtn);
  res.render('companypage',{companies:rtn});
});
});
router.get('/companyadd',function(req,res){
Company.find(function(err,rtn){
    if(err) throw err;
    console.log(rtn);
  res.render('companypage',{companies:rtn});
});
});
router.post('/companyupdate', function(req,res){
      console.log('call');
      var update={
      companyName:req.body.name,
      companyAddress:req.body.address,
      phoneNo:req.body.phoneno,
      paidDate:req.body.paiddate,
      totalCredit:req.body.total,
      Remark:req.body.remark,
     }
  Company.findByIdAndUpdate(req.body.id,{$set: update},function(err,rtn){
        if(err) throw err;
      console.log(rtn);
      res.redirect('/admins/companylist');
      });
    });


    router.get('/companyupdate/:id',function(req,res){
      console.log('calls ');
Company.findById(req.params.id,function(err,rtn){
        if(err) throw err;
        console.log(rtn);
          res.render('updatecompany',{companies:rtn});
    });
    });
router.get('/companydelete/:id',function(req,res){
Company.findByIdAndRemove(req.params.id,function (err,rtn) {
  if (err) throw err;
  console.log(rtn);
  res.redirect('/admins/companylist');


});
});

router.post('/warehouseadd',function(req,res){
  var warehouse =new Warehouse();
    warehouse.itemType=req.body.itemtype;
    warehouse.barCode=req.body.barcode;
    warehouse.itemName=req.body.itemname;
    warehouse.brandName=req.body.brandname;
    warehouse.companyName=req.body.companyname;
    warehouse.purchasePrice=req.body.purchaseprice;
    warehouse.salePrice=req.body.saleprice;
    warehouse.Qty=req.body.qty;
    warehouse.startDate=req.body.startdate;
    warehouse.expDate=req.body.expdate;
    warehouse.disscount=req.body.disscount;
    warehouse.save(function(err,rtn){
      if(err) throw err;
      res.redirect('/admins/warehouselist');

    });
    });

    router.get('/warehouselist',function(req,res){
    Warehouse.find(function(err,rtn){
      Search.find(function (err2,rtn2) {
        if(err2) throw err2;

        if(err) throw err;
        console.log(rtn);
      res.render('warehousepage',{warehouse:rtn,search:rtn2});
    });
    });
    });

    router.get('/warehouseadd',function(req,res){
    Warehouse.find(function(err,rtn){
        if(err) throw err;
        console.log(rtn);
      res.render('warehousepage',{warehouse:rtn});
    });
    });

    router.post('/warehouseupdate', function(req,res){
          console.log('call');
          var update={
            itemType:req.body.itemtype,
            barCode:req.body.barcode,
            itemName:req.body.itemname,
            brandName:req.body.brandname,
            companyName:req.body.companyname,
            purchasePrice:req.body.purchaseprice,
            salePrice:req.body.saleprice,
            Qty:req.body.qty,
            startDate:req.body.startdate,
            expDate:req.body.expdate,
            disscount:req.body.disscount,
         }
            Warehouse.findByIdAndUpdate(req.body.id,{$set: update},function(err,rtn){
            if(err) throw err;
          console.log(rtn);
          res.redirect('/admins/warehouselist');
          });
        });


        router.get('/warehouseupdate/:id',function(req,res){
          console.log('calls ');
        Warehouse.findById(req.params.id,function(err,rtn){
            if(err) throw err;
            console.log(rtn);
              res.render('updatewarehouse',{warehouse:rtn});
        });
        });




    router.get('/warehousedelete/:id',function(req,res){
    Warehouse.findByIdAndRemove(req.params.id,function (err,rtn) {
      if (err) throw err;
      console.log(rtn);
      res.redirect('/admins/warehouselist');
    });
    });

    router.post('/search',function(req,res){
      var search =new Search();
        search.name=req.body.name;
        search.type=req.body.type;
        search.address=req.body.address;
        search.save(function(err,rtn){
          if(err) throw err;
          res.redirect('/admins/searchlist');
        });
        });

        router.get('/search',function(req,res){
        Search.find(function(err,rtn){
            if(err) throw err;
            console.log(rtn);
          res.render('warehousepage',{search:rtn});
        });
        });

    router.get('/searchlist',function(req,res){
    Search.find(function(err,rtn){
      Warehouse.find(function (err2,rtn2) {
        if(err2) throw err2;
        if(err) throw err;
        console.log(rtn);
      res.render('warehousepage',{search:rtn,warehouse:rtn2});
    });
    });
    });


    router.post('/searchupdate', function(req,res){
          console.log('call');
          var update={
        name:req.body.name,
        type:req.body.type,
        address:req.body.address,
         }
            Search.findByIdAndUpdate(req.body.id,{$set: update},function(err,rtn){
            if(err) throw err;
          console.log(rtn);
          res.redirect('/admins/searchlist');
          });
        });


        router.get('/searchupdate/:id',function(req,res){
          console.log('calls ');
          Search.findById(req.params.id,function(err,rtn){
            if(err) throw err;
            console.log(rtn);
              res.render('updatesearch',{search:rtn});
        });
        });




    router.get('/searchdelete/:id',function(req,res){
    Search.findByIdAndRemove(req.params.id,function (err,rtn) {
      if (err) throw err;
      console.log(rtn);
      res.redirect('/admins/searchlist');
    });
    });

    router.post('/managementadd',function(req,res){
      var management =new Staffmanagement();
        management.Name=req.body.name;
        management.Age=req.body.age;
        management.Address=req.body.address;
        management.startDate=req.body.startdate;
        management.Email=req.body.email;
        management.NRCno=req.body.nrcno;
        management.Password=req.body.password;
        management.Gender=req.body.gender;
        management.save(function(err,rtn){
          if(err) throw err;
          res.redirect('/admins/managementlist');
        });
        });

    router.get('/managementlist',function(req,res){
    Staffmanagement.find(function(err,rtn){
        if(err) throw err;
        console.log(rtn);
      res.render('managementpage',{management:rtn});
    });
    });

    router.get('/managementadd',function(req,res){
  Staffmanagement.find(function(err,rtn){
        if(err) throw err;
        console.log(rtn);
      res.render('managementpage',{management:rtn});
    });
    });
    router.post('/managementupdate', function(req,res){
          console.log('call');
          var update={
          Name:req.body.name,
          Age:req.body.age,
          Relationship:req.body.relationship,
          Address:req.body.address,
          startDate:req.body.startdate,
          Education:req.body.eduction,
          Email:req.body.email,
          NRCno:req.body.nrcno,
          Password:req.body.password,
          Gender:req.body.gender,
         }
          Staffmanagement.findByIdAndUpdate(req.body.id,{$set: update},function(err,rtn){
            if(err) throw err;
          console.log(rtn);
          res.redirect('/admins/managementlist');
          });
        });


        router.get('/managementupdate/:id',function(req,res){
          console.log('calls ');
      Staffmanagement.findById(req.params.id,function(err,rtn){
            if(err) throw err;
            console.log(rtn);
              res.render('updatemanagement',{management:rtn});
        });
        });

    router.get('/managementdelete/:id',function(req,res){
    Staffmanagement.findByIdAndRemove(req.params.id,function (err,rtn) {
      if (err) throw err;
      console.log(rtn);
      res.redirect('/admins/managementlist');
    });
    });

    router.post('/expansesadd',function(req,res){
      var expanses =new Expanses();
        expanses.startDate=req.body.dates;
        expanses.Description=req.body.description;
        expanses.Amount=req.body.amount;
        expanses.Remark=req.body.remark;
        expanses.save(function(err,rtn){
          if(err) throw err;
          res.redirect('/admins/expanseslist');
        });
        });

    router.get('/expanseslist',function(req,res){
    Expanses.find(function(err,rtn){
        if(err) throw err;
        console.log(rtn);
      res.render('Expenses',{expanses:rtn});
    });
    });

    router.get('/expansesadd',function(req,res){
  Expanses.find(function(err,rtn){
        if(err) throw err;
        console.log(rtn);
      res.render('Expenses',{expanses:rtn});
    });
    });
    router.post('/expansesupdate', function(req,res){
          console.log('call');
          var update={
          startDate:req.body.dates,
          Description:req.body.description,
          Amount:req.body.amount,
          Remark:req.body.remark,
         }
      Expanses.findByIdAndUpdate(req.body.id,{$set: update},function(err,rtn){
            if(err) throw err;
          console.log(rtn);
          res.redirect('/admins/expanseslist');
          });
        });


        router.get('/expansesupdate/:id',function(req,res){
          console.log('calls ');
    Expanses.findById(req.params.id,function(err,rtn){
            if(err) throw err;
            console.log(rtn);
              res.render('updateexpenses',{expanses:rtn});
        });
        });

    router.get('/expansesdelete/:id',function(req,res){
    Expanses.findByIdAndRemove(req.params.id,function (err,rtn) {
      if (err) throw err;
      console.log(rtn);
      res.redirect('/admins/expanseslist');
    });
    });

    router.get('/stockledger',(req,res)=>{
      res.render('StockLedger');
    });
    router.get('/register',(req,res)=>{
      res.render('register');
    });

    router.get('/profit',(req,res)=>{
      res.render('Profit&Loss');
    });

    router.get('/changeAdmin',(req,res)=>{
      res.render('changelogin');
    });



    router.get('/purchase',(req,res)=>{
      res.render('Purchase');
    });

    router.get('/purchasehistory',(req,res)=>{
      res.render('PurchaseHistory');
    });

    router.get('/salehistory',(req,res)=>{
      res.render('SaleHistory');
    });

    router.get('/summaries',(req,res)=>{
      Staffmanagement.find({},function(err,rtn){
        Showroom.find({},function(err2,rtn2){
          Expanses.find({},function(err3,rtn3){
            Brand.find({},function(err4,rtn4){
              Category.find({},function(err5,rtn5){
                if(err5) throw err5;
                  if(err4) throw err4;
                    if(err3)throw err3;
                      if(err2) throw err2;
                        if(err) throw err;
                    console.log(rtn);
                    console.log(rtn2);
                    console.log(rtn3);
      res.render('Summaries',{management:rtn,showroom:rtn2,expanses:rtn3,brand:rtn4,category:rtn5});
    });
  });
});
});
});
  })
    router.get('/salehistory',(req,res)=>{
      res.render('SaleHistory');
    });

    router.get('/sale',(req,res)=>{
      res.render('sale');
    });

    router.post('/brandadd',upload.single('image'),function(req,res){
      var brand =new Brand();
        brand.name=req.body.name;
        if(req.file) brand.imgUrl = '/images/uploads/'+ req.file.filename;
        brand.save(function(err,rtn){
          if(err) throw err;
          res.redirect('/admins/brandlist');
        });
        });

    router.get('/brandadd',function(req,res){
          Brand.find(function(err,rtn){
            if(err) throw err;
            console.log(rtn);
          res.render('brandadd',{brand:rtn});
        });
        });

    router.get('/brandlist',function(req,res){
      Brand.find(function(err,rtn){
        if(err) throw err;
        console.log(rtn);
      res.render('brandadd',{brand:rtn});
    });
    });



    router.post('/brandupdate', function(req,res){
          console.log('call');
          var update={
            name:req.body.name,
         }
          Brand.findByIdAndUpdate(req.body.id,{$set: update},function(err,rtn){
            if(err) throw err;
          console.log(rtn);
          res.redirect('/admins/brandlist');
          });
        });


        router.get('/brandupdate/:id',function(req,res){
          console.log('calls ');
          Brand.findById(req.params.id,function(err,rtn){
            if(err) throw err;
            console.log(rtn);
              res.render('brandupdate',{brand:rtn});
        });
        });

    router.get('/branddelete/:id',function(req,res){
    Brand.findByIdAndRemove(req.params.id,function (err,rtn) {
      if (err) throw err;
      console.log(rtn);
      res.redirect('/admins/brandlist');
    });
    });


    router.post('/categoryadd',function(req,res){
      var category=new Category();
        category.name=req.body.name;
        category.save(function(err,rtn){
          if(err) throw err;
          res.redirect('/admins/categorylist');
        });
        });

        router.get('/categoryadd',function(req,res){
        Category.find(function(err,rtn){
            if(err) throw err;
            console.log(rtn);
          res.render('categoryadd',{category:rtn});
        });
        });

    router.get('/categorylist',function(req,res){
    Category.find(function(err,rtn){
        if(err) throw err;
        console.log(rtn);
      res.render('categoryadd',{category:rtn});
    });
    });



    router.post('/categoryupdate', function(req,res){
          console.log('call');
          var update={
        name:req.body.name,

         }
          Category.findByIdAndUpdate(req.body.id,{$set: update},function(err,rtn){
            if(err) throw err;
          console.log(rtn);
          res.redirect('/admins/categorylist');
          });
        });


        router.get('/categoryupdate/:id',function(req,res){
          console.log('calls ');
          Category.findById(req.params.id,function(err,rtn){
            if(err) throw err;
            console.log(rtn);
              res.render('categoryupdate',{category:rtn});
        });
        });

    router.get('/categorydelete/:id',function(req,res){
    Category.findByIdAndRemove(req.params.id,function (err,rtn) {
      if (err) throw err;
      console.log(rtn);
      res.redirect('/admins/categorylist');
    });
    });




module.exports = router;
