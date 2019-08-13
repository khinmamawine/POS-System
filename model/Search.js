var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var SearchSchema = new Schema({
   name:{
     type: String,
     required:true,
   },
   type:{
     type: String,
     required:true,

   },
   address:{
     type: String,
     required:true,
   },
 })
module.exports =mongoose.model('Search',SearchSchema);
