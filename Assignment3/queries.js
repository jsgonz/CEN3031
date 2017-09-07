/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  Listing.findOne({'name':'Library West'}).exec(function(err, listing) {
    if(err) throw err;

    console.log(listing);
  });
};

var removeCable = function() {
  Listing.findOne({'code':'CABL'}).exec(function(err, listing) {
    if(err) throw err;

    console.log(listing);

    listing.remove(function(err) {
      if(err) throw err;
    });
  });
};

var updatePhelpsLab = function() {
  var correctAddress = '686 Museum Rd. gainesville, FL 32603, United States';

  Listing.findOne({'name':'Phelps Laboratory'}).exec(function(err, listing) {
    if(err) throw err;

    if(listing.address != correctAddress) {
      listing.address = correctAddress;
    }

    listing.save(function(err) {
      if(err) throw err;

      console.log(listing);
    });
  });
};

var retrieveAllListings = function() {
  Listing.find().exec(function(err, listing) {
    if(err) throw err;

    console.log(listing);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
