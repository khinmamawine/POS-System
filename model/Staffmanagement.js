var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var StaffmanagementSchema = new Schema({

Name:{
     type: String,
     required:true,
   },
   Age:{
     type: String,
     required:true,

   },

  Address:{
     type: String,
     required:true,
   },

startDate:{
     type: String,
     required:true,
   },


   Email:{
      type: String,
      required:true,
         unique:true,
    },

  NRCno:{
      type: String,
      required:true,
    },


    Password:{
        type: String,
        required:true,
      },

  Gender:{
        type: String,
        required:true,
      },



 });
module.exports =mongoose.model('Staffmanagement',StaffmanagementSchema);
