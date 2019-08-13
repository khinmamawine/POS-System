var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var WarehouseSchema = new Schema({
  itemType:{
        type: String,
        required:true,
      },
barCode:{
     type: String,
     required:true,
   },
   itemName:{
     type: String,
     required:true,

   },
  brandName:{
     type: String,
     required:true,
   },
   companyName:{
     type: String,
     required:true,

   },

purchasePrice:{
     type: String,
     required:true,
   },
   salePrice:{
        type: String,
        required:true,
      },

  Qty:{
     type: String,
     required:true,

   },

   startDate:{
       type: String,
   },
   expDate:{
       type:String,
   },

disscount:{
     type: String,
     required:true,
   },
 });
module.exports =mongoose.model('Warehouse',WarehouseSchema);
