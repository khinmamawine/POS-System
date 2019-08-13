var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var ExpansesSchema = new Schema({
startDate:{
     type: String,
     required:true,
   },

   Description:{
     type: String,
     required:true,
   },
Amount:{
      type: String,
      required:true,
    },
  Remark:{
      type: String,
      required:true,
    },
 })
module.exports =mongoose.model('Expanses',ExpansesSchema);
