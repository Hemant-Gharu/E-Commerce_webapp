const exports = require("express");
const vanderRoute=express.Router();
const bodyParser = require("body-parser");
const Vender=require("./vender.model");
var fs = require("fs");
const multer = require("multer");

//vender registration code
vanderRoute.route("/register").post((req, res) => {
    var vender = new vender(req.body);
    vender.save().then(vender=>{
        if(vender!=null)
        {
            res.send("Registration Successfull");
        }
        else{
            res.send("Registration Failed");
        }
    }).catch(err=>{
        res.status(400).send("Registration Failed");
    });
});


//login
venderRoute.route("/login/:vuid/vupass").get((req, res)=>{
    var id=req.params.vuid;
    var pass=req.params.vupass;
    Vender.findOne({$and: [{"VUserId": id},{"VUserPass":pass}]}).
    then(vender=>{
        res.send(vender);
        res.end()
    });
});

//get image
venderRoute.route
('/getimage/:vpicname').
get((req, res)=>{
    res.sendFile("C:/Users/AVITA/Desktop/E-Commerce Website/E-Commerce_webapp/BackEnd/server-app/productimages"+req.params.vpicname);
});

// image save
const st = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'venderimages/')
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: st});

venderRoute.post('/savevenderimage', upload.single('file'),
(req, res) => {
    res.json({})
})

//get vender for count
venderRoute.route("/getvendercount").get((req, res) => {
    Vender.find().then(vender => {
        res.send(vender)
        res.end()
    }).catch(err => {
        res.send("Something went wrong");
        res.end();
    });
})
module.exports = venderRoute