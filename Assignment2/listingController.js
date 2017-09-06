angular.module('listings')
.controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      var coord = {
        latitude: $scope.lat,
        longitude: $scope.long
      }

      var listing = {
        code: $scope.c.toUpperCase(),
        name: $scope.n,
        coordinates: coord,
        address: $scope.a
      }

      Listings.unshift(listing);

      $scope.c = undefined;
      $scope.n = undefined;
      $scope.lat = undefined;
      $scope.long = undefined;
      $scope.a = undefined;
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };

    $scope.filter = function() {
      var originalList = Array.from(Listings);
      var filteredList = [];
      var value = $scope.val.toLowerCase();
      var name = undefined;
      var code = undefined;

      if(value === ""){
        $scope.listings = originalList;
      }else{
        for(var i = 0; i < originalList.length; i++){
          name = originalList[i].name.toLowerCase();
          code = originalList[i].code.toLowerCase();

          if(name.includes(value) || code.includes(value)){
            filteredList.push(originalList[i]);
          }
        }
        $scope.listings = filteredList;
      }
    };
  }
]);
