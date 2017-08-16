angular.module('restaurants')

.factory('restaurantsService', function ($http) {
  const getRestaurants = function () {
    var url = 'http://localhost:3001/restaurants?page=1&limit=10'
    return $http.get(url)
    .then(function (response) {
      return response.data
    })
  }

  const getFilteredByBorough = function (borough) {
    var url = 'http://localhost:3001/restaurants/borough/' + borough + '?page=1&limit=10'
    return $http.get(url)
    .then(function (response) {
      return response.data
    })
  }

  const getFilteredByCuisine = function (cuisine) {
    var url = 'http://localhost:3001/restaurants/cuisine/' + cuisine + '?page=1&limit=10'
    return $http.get(url)
    .then(function (response) {
      return response.data
    })
  }

  const getNewPage = function (num) {
    var url = 'http://localhost:3001/restaurants?limit=10&page=' + num
    return $http.get(url)
    .then(function (response) {
      return response.data
    })
  }

  const getNewPageCuisine = function (num, cuisine) {
    var url = 'http://localhost:3001/restaurants/cuisine/' + cuisine + '?limit=10&page=' + num
    return $http.get(url)
    .then(function (response) {
      return response.data
    })
  }

  const getNewPageBorough = function (num, borough) {
    var url = 'http://localhost:3001/restaurants/borough/' + borough + '?limit=10&page=' + num
    return $http.get(url)
    .then(function (response) {
      return response.data
    })
  }
  return {getRestaurants: getRestaurants, getFilteredByCuisine: getFilteredByCuisine, getNewPage: getNewPage, getFilteredByBorough: getFilteredByBorough, getNewPageBorough: getNewPageBorough, getNewPageCuisine: getNewPageCuisine}
})
