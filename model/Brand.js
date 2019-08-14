var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var BrandSchema = new Schema({
   name:{
     type: String,
     required:true,
   },
  imgUrl:{
  type:String,
  required:true,
   },

 })
module.exports =mongoose.model('Brand',BrandSchema);
