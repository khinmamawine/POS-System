var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var ShowroomSchema = new Schema({
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
     type:String,
     required:true,
   },
salePrice:{
     type: String,
     required:true,
   },

   startDate:{
       type: String,
        required:true,
   },
   expDate:{
       type:String,
        required:true,
   },

  Qty:{
     type: String,
     required:true,

   },
Remark:{
     type: String,
     required:true,
   },
 });
module.exports =mongoose.model('Showroom',ShowroomSchema);
