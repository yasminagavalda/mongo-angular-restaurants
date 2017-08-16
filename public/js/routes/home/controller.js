angular.module('restaurants')

  .controller('HomeController', function ($scope, $rootScope, restaurantsService, $location) {
    restaurantsService.getRestaurants()
    .then(function (restaurants) {
      $rootScope.restaurants = restaurants
      console.log(restaurants)
    })

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

    $scope.page = function (num) {
      console.log(num)
      restaurantsService.getNewPage(num)
      .then(function (restaurants) {
        $rootScope.restaurants = restaurants
        console.log(restaurants)
      })
    }
  })
