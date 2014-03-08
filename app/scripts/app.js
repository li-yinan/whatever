'use strict';

angular.module('whateverApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .when('/newsdetail/:id', {
        templateUrl: 'views/newsdetail.html',
        controller: 'NewsdetailCtrl'
      })
      .when('/picdetail/:id', {
        templateUrl: 'views/picdetail.html',
        controller: 'PicdetailCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
