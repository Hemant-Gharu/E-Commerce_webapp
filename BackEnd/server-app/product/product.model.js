var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Product = new Schema({
  pid: { type: Number },
  pname: { name: String },
  pprice: { type: Number },
  oprice: { type: Number },
  ppicname: { type: String },
  pcatgid: { type: Number }
},
  {
    collation: 'Product'
  }
);
module.exports = mongoose.mongoose.model('Product',
Product);