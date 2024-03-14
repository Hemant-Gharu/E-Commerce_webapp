const express = require('express');
const cityRoute = express.Router();
let City = require('./city.model');
//Save city
cityRoute.route('/addcity/:ctid/:ctname/:stid').post(function (req, res) {
   var city = new City({ ctid: req.params.ctid, ctname: req.params.ctname, stid: req.params.stid });
   city.save()
      .then(() => {
         res.status(200).json({ 'city': 'city added successfully' + city });
         res.end();
      }).catch((err) => {
         res.status(400).send('unable to database');
         res.end();
      })
})
//show all city
cityRoute.route('/showcity').get(function (req, res) {
   City.find().then(
      city => {
         res.send(city);
         res.end();
      }
   ).catch(err => {
      res.status(400).send("Data not found something went wrong")

   })
});
//show city by state
cityRoute.route('/showcitybystate/:stid').get(function (req, res) {
   City.find({ "stid": req.params.stid }).then(city => {
      res.send(city);
      res.end();
   }).catch(err => {
      res.status(400).send("Data not found something went wrong")
   });
});
module.exports = cityRoute;