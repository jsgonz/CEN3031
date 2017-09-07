'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');
    Listings = require('./listings.json');

mongoose.connect(config.db.uri);

var listEntries = Listings["entries"]
var i = 0;

for(var key in listEntries) {
  var item = listEntries[key];

  console.log(item);
  console.log("item: " + i);
  i++;

  var place = new Listing({
    code: item.code,
    name: item.name,
    address: item.address
  });

  place.save(function(err) {
    if(err) throw err;
  });
}
