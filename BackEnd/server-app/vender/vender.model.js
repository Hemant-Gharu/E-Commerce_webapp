var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var Vender=new Schema({
    VUserId: {type: String},
    VUserPass: {type: String},
    VenderName: {type: String},
    VAddress: {type: String},
    VContact: {type: Number},
    VEmail: {type: String},
    VPicName: {type: String},
    Vid: {type: Number},
},{collation: "Vender"});
module.exports = mongoose.model("Vender", Vender);