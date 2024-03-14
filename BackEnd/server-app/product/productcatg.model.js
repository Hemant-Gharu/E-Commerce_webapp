var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var ProductCatg=new Schema({
    pcatgid:{type:Number},
    pcatgname:{type:String}
},
{
    collection:'productcatg'
}
);
module.exports =mongoose.model('ProductCatg',ProductCatg);