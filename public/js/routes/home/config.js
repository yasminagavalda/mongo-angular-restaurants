angular.module('restaurants')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/routes/home/template.html',
        controller: 'HomeController'
      })
  })
