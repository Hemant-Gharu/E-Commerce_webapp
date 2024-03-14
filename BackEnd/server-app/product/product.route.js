const express = require('express');
const productRoute= express.Router();
let Product = require('./product.model');
const multer= require('multer');

//save Product
productRoute.route('/saveproduct').post(function (req,res) {
    let product =new Product(req.body);
    console.log(product)
    product.save().then(product=>{
        res.status(200).json({'product':'product added successfully'+product});

    }).catch(err=>{
        res.status(400).send("unable to save to database")
    });
});
//get all product
productRoute.route('/showproduct').get(function (req,res){
    Product.find().then(product=>{
        console.log(product);
        res.send(product);
    }).catch(err=>{
        res.status(400).send("Data not found something went weong")
    });
});
//get product count for id
productRoute.route('/getmaxpid').get(function (req,res){
    Product.find().then(product=>{
        console.log(product);
        res.send(product);
    })
});

//save product Image
const stv= multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null,'productimages/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.original)
    },
})
const uploadv = multer({storage:stv});
productRoute.post('./saveproductimage',uploadv.single('file'),(req,res)=>{
    res.json({})
});
//get product image
productRoute.route('/getproductimage/:picname').get((req,res)=>{
    res.sendFile("/C:/Users/SSIDDHANT/Desktop/Project/backend/Serverapp/productimages/"+req.params.picname)
});
module.exports=productRoute;

