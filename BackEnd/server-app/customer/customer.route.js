const express = require("express");
const customerRoute = express.Router();
const bodyparser = require("body-parser");
const Customer = require("./customer.model");
var fs = require("fs");
const multer = require("multer");

//Customer registration code
customerRoute.route("/register").post((req, res) => {
    var customer = new Customer(req.body);
    customer.save().then(customer => {
        if (customer != null) {
            res.send("Registration Successfull");
        }
        else {
            res.send("Registration Failure");
        }
    }).catch(err => {
        res.status(400).send("Registration Failed");
    })
})

//login
customerRoute.route("/login/:cuid/:cupass").get((req, res) => {
    var id = req.params.cuid;
    var pass = req.params.cupass;
    Customer.findOne({ $and: [{ "CUserId": id }, { "CUserPass": pass }] }).then(customer => {
        res.send(customer);
        res.end();
    }).catch(err => {
        res.send("Something went wrong");
        res.end()
    })
})
//get image
customerRoute.route
    ('/getimage/:cpicname').
    get((req, res) => {
        res.sendFile("C:/Users/AVITA/Desktop/E-Commerce Website/E-Commerce_webapp/BackEnd/server-app/customerimages/" + req.params.cpicname)
    });


//image save
const st = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'customerimages/')
},
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: st});

customerRoute.post('/savecustomerimage', upload.single('file'),(req, res) => {
    res.json({});
})

//get customer for count
customerRoute.route("/getcustomercount").get((req, res) => {
    Customer.find().then((customer) =>{
        res.send(customer);
        res.end();
    }).catch(err => {
        res.send("Something went wrong");
        res.end();
    })
});
//get customer details by id
customerRoute.route("/getcustomerdetails/:cid")

module.exports = customerRoute;