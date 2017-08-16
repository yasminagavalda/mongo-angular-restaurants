angular.module('restaurants')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/results-cuisine', {
        templateUrl: 'js/routes/resultsByCuisine/template.html',
        controller: 'cuisineController'
      })
  })
