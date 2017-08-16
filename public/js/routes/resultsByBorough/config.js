angular.module('restaurants')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/results-borough', {
        templateUrl: 'js/routes/resultsByBorough/template.html',
        controller: 'ResultsController'
      })
  })
