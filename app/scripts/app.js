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
      .when('/picnewsdetail/:id', {
        templateUrl: 'views/picnewsdetail.html',
        controller: 'PicnewsdetailCtrl'
      })
      .when('/textnewsdetail/:id', {
        templateUrl: 'views/textnewsdetail.html',
        controller: 'TextnewsdetailCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
