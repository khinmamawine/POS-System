var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var CompanySchema = new Schema({
  companyName:{
    type: String,
    required:true,
      },
companyAddress:{
     type: String,
     required:true,
   },
   phoneNo:{
     type: String,
     required:true,

   },
  paidDate:{
     type: String,
     required:true,
   },
  totalCredit:{
     type: String,
     required:true,
   },

Remark:{
     type: String,
     required:true,
   },
 });
module.exports =mongoose.model('Company',CompanySchema);
