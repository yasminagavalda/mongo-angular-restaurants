angular.module('restaurants')
.controller('ResultsController', function ($scope, $rootScope, restaurantsService, $location) {

  $scope.searchByBorough = function (borough) {
    // var partial = borough.split('').shift().join('')
    // borough = borough.charAt(0).toUpperCase().push(partial)

    var borough = borough.split('').shift().toUpperCase() + borough.substr(1)

    console.log(borough)

    restaurantsService.getFilteredByBorough(borough)
    .then(function (filteredRestaurants) {
      $rootScope.filteredRestaurants = filteredRestaurants
      $location.path('/results-borough')
      console.log(filteredRestaurants)
    })
  }

  $scope.getByCuisine = function (cuisine) {
    // var partial = borough.split('').shift().join('')
    // borough = borough.charAt(0).toUpperCase().push(partial)
    console.log(cuisine)

    console.log(cuisine)

    restaurantsService.getFilteredByCuisine(cuisine)
    .then(function (filteredRestaurants) {
      $rootScope.filteredRestaurantsByCuisine = filteredRestaurants
      $location.path('/results-cuisine')
      console.log(filteredRestaurants)
    })
  }

  $scope.pageBorough = function (num, borough) {
    console.log(num)
    restaurantsService.getNewPageBorough(num, borough)
    .then(function (restaurants) {
      $rootScope.filteredRestaurants = restaurants
      console.log(restaurants)
    })
  }
})
