var mongoose=require("mongoose");
var Schema = mongoose.Schema;
var State =new Schema({
    stid:{type:Number},
    stname:{type:String}
},
{
    collection:'State'
}

);
module.exports =mongoose.model('State',State)