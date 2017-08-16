angular.module('restaurants')
.controller('cuisineController', function ($scope, $rootScope, restaurantsService, $location) {

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

  $scope.getByBorough = function (borough) {
    // var partial = borough.split('').shift().join('')
    // borough = borough.charAt(0).toUpperCase().push(partial)
    console.log(borough)
    var borough = borough.split('').shift().toUpperCase() + borough.substr(1)

    console.log(borough)

    restaurantsService.getFilteredByBorough(borough)
    .then(function (filteredRestaurants) {
      $rootScope.filteredRestaurants = filteredRestaurants
      $location.path('/results-borough')
      console.log(filteredRestaurants)
    })
  }

  $scope.pageCuisine = function (num, cuisine) {
    console.log(num)
    restaurantsService.getNewPageCuisine(num, cuisine)
    .then(function (restaurants) {
      $rootScope.filteredRestaurantsByCuisine = restaurants
      console.log(restaurants)
    })
  }
})
