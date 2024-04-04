var express = require('express');
var app = express();
const bodyparser = require("body-parser");
var cors = require('cors');
const PORT = 5050;
var mongoose = require('mongoose');
var db = require('./DB');
var productcatgRoute = require('./product/productcatg.route');
var productRoute = require('./product/product.route');
var venderRoute = require('./vender/vender.route');
var stateRoute = require('./statecity/state.route');
var cityRoute = require('./statecity/city.route');
var customerRoute = require('./customer/Customer.route');
var payementRoute = require('./payment');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/productcatg", productcatgRoute);
app.use("/product", productRoute);
app.use("/state", stateRoute);
app.use("/city", cityRoute);
app.use("/customer", customerRoute);

app.use("/payment", payementRoute);

mongoose.Promise = global.Promise;
mongoose.connect(db.URL, { useNewurlParser: true }).then(
    () => { console.log("connected to the database" + db.URL) },
    err => { console.log('Caan not connect to the database' + err) }
);
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})
