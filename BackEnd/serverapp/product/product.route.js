const express = require('express');
const productRoute = express.Router();
let Product = require('./product.model');
const multer = require('multer');

//save Product
productRoute.route
  ('/saveproduct').
  post(function (req, res) {
    let product = new Product(req.body);
    console.log(product);
    product.save().then(product => {
      res.status(200).json({product:
          'product added successfully'
          + product});
    }).catch(err => {
      res.status(400).send
        ("unable to save to database")
    })
  })
//get product all
productRoute.route
  ('/showproduct').get(function (req, res) {
    Product.find()
      .then(product => {
        console.log(product);
        res.send(product)
      })
      .catch(err => {
        res.status(400).send
          ("Data not found something went wrong")
      })
  })
//get product count for id
productRoute.route
  ('/getmaxpid').get(function (req, res) {
    Product.find()
      .then(product => {
        console.log(product);
        res.send(product)
      })
      .catch(err => {
        res.status(400).send
          ("Data not found something went wrong")
      });
  });
// save product imgage
const stv = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, 'productimages/')
  },
  filename: (req, file, cd) => {
    cd(null, file.originalname)
  },
})
const uploadv = multer({storage: stv});
productRoute.post('/saveproductimage', uploadv.single('file'), (req, res) =>{
  res.json({})
})
//get product image
productRoute.route
('/getproductimage/:picname').
get((req, res) =>{
  res.send("/home/administrator/Desktop/MERN10AM100ct/Project/backend/server-app/productimages/"+req.params.picname)
})
module.exports = productRoute