'use strict';

angular.module('whateverApp')
  .controller('ActivityCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      Data.get(url.activity, {}, function(data) {
          $scope.pic_ad = data.pic_ad;
          $scope.pic_show_ad = data.pic_show_ad;
      });
  }]);
