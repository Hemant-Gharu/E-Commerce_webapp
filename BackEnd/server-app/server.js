var express = require('express');
var app = express();
var cors = require('cors')
var bodyparser = require('body-parser');
const PORT = 5050
var mongoose = require('mongoose')
var db = require('./DB')
// var productcatgRoute = require('./product/ProductCatg.route')
// var productRoute = require('./prsoduct/Product.route')
// var venderRoute = require('./vender/Vender.route')
var stateRoute = require('./statecity/state.route')
var cityRoute = require('./statecity/city.route')
// var customerRoute = require('./customer/customer.route')
// var paymentRoute = require('./payment')

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
// app.use("/productcatg", productcatgRoute);
// app.use("/product", productRoute);
// app.use("/veder", venderRoute);
app.use("/state", stateRoute);
app.use("/city", cityRoute);
// app.use("/customer", customerRoute);
// app.use("/payment", paymentRoute);

mongoose.Promise = global.Promise
mongoose.connect(db.URL, {useNewUrlParser: true}).then(()=>{
  console.log("Database is connected"+db.URL)},
  err => {console.log("Can not connect to the database"+ err)}
  );
  app.listen(PORT, ()=>{
    console.log("Server in running on port "+PORT);
  })