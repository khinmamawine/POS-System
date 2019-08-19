var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SaleSchema = new Schema({
  product:[{
    product_id:{
      type:Schema.Types.ObjectId,
      ref:'Showroom',
    },
    count:{
      type:Number
    }
  }],
  total:{
    type:Number,
    required: true
  },
  inserted:{
     type:Date,
     default:Date.now
   },
})

module.exports =mongoose.model('Sales',SaleSchema);
