'use strict';

angular.module('whateverApp')
  .controller('CardetailCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      Data.get(url.getCarDetail, {"id":$routeParams.id}, function(data) {
          $scope.data = data;
      });
  }]);
