var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var ExpansesSchema = new Schema({
startDate:{
     type: Date,
     required:true,
   },

   Description:{
     type: String,
     required:true,
   },
Amount:{
      type: Number,
      required:true,
    },
  Remark:{
      type: String,
      required:true,
    },
 })
module.exports =mongoose.model('Expanses',ExpansesSchema);
