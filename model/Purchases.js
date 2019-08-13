var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var PurchaseSchema = new Schema({
barcode:{
    type: String,
    required:true,
      },
name:{
     type: String,
     required:true,
   },
   inserted:{
     type:Date,
     default:Date.now
   },
  stock:{
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

discount:{
     type: String,
     required:true,
   },
 });
module.exports =mongoose.model('Purchase',PurchaseSchema);
