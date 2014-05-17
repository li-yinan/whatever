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
      .when('/ad/:id', {
        templateUrl: 'views/ad.html',
        controller: 'AdCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .when('/payMenu', {
        templateUrl: 'views/paymenu.html',
        controller: 'PaymenuCtrl'
      })
      .when('/payIntro', {
        templateUrl: 'views/payintro.html',
        controller: 'PayintroCtrl'
      })
      .when('/payIndex', {
        templateUrl: 'views/payindex.html',
        controller: 'PayindexCtrl'
      })
      .when('/payhistory', {
        templateUrl: 'views/payhistory.html',
        controller: 'PayhistoryCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/carIndex/:brandId/:priceId/:usedtimeId/:mileageId/:gearboxId', {
        templateUrl: 'views/carindex.html',
        controller: 'CarindexCtrl'
      })
      .when('/carIndex', {
        templateUrl: 'views/carindex.html',
        controller: 'CarindexCtrl'
      })
      .when('/carDetail/:id', {
        templateUrl: 'views/cardetail.html',
        controller: 'CardetailCtrl'
      })
      .when('/carsearch', {
        templateUrl: 'views/carsearch.html',
        controller: 'CarsearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
