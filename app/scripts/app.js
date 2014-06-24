'use strict';

angular.module('whateverApp', [
  'ngCookies',
  'ngResource',
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
      .when('/carsearch/:brandId/:priceId/:usedtimeId/:mileageId/:gearboxId', {
        templateUrl: 'views/carindex.html',
        controller: 'CarindexCtrl'
      })
      .when('/houseIndex', {
        templateUrl: 'views/houseindex.html',
        controller: 'HouseindexCtrl'
      })
      .when('/houseIndex/:communityId/:housing_typeId/:roomId/:areaId/:decorateId/:priceId/:regionId', {
        templateUrl: 'views/houseindex.html',
        controller: 'HouseindexCtrl'
      })
      .when('/houseDetail/:id', {
        templateUrl: 'views/housedetail.html',
        controller: 'HousedetailCtrl'
      })
      .when('/rentDetail/:id', {
        templateUrl: 'views/rentdetail.html',
        controller: 'RentdetailCtrl'
      })
      .when('/housesearch', {
        templateUrl: 'views/housesearch.html',
        controller: 'HousesearchCtrl'
      })
      .when('/housesearch/:brandId/:priceId/:usedtimeId/:mileageId/:gearboxId', {
        templateUrl: 'views/houseindex.html',
        controller: 'HouseindexCtrl'
      })
      .when('/cc', {
        templateUrl: 'views/cc.html',
        controller: 'CcCtrl'
      })
      .when('/pub', {
        templateUrl: 'views/cc.html',
        controller: 'CcCtrl'
      })
      .when('/usercenter', {
        templateUrl: 'views/usercenter.html',
        controller: 'UsercenterCtrl'
      })
      .when('/employee', {
        templateUrl: 'views/employee.html',
        controller: 'EmployeeCtrl'
      })
      .when('/recuitsearch', {
        templateUrl: 'views/recuitsearch.html',
        controller: 'RecuitsearchCtrl'
      })
      .when('/recuitdetail/:id', {
        templateUrl: 'views/recuitdetail.html',
        controller: 'RecuitdetailCtrl'
      })
      .when('/addetail/:id', {
        templateUrl: 'views/addetail.html',
        controller: 'AddetailCtrl'
      })
      .when('/activity', {
        templateUrl: 'views/activity.html',
        controller: 'ActivityCtrl'
      })
      .when('/activitydetail/:id', {
        templateUrl: 'views/activitydetail.html',
        controller: 'AdCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
