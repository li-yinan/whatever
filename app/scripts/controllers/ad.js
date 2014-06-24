'use strict';

angular.module('whateverApp')
  .controller('AdCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      Data.get(url.adDetail, {"id":$routeParams.id}, function(data) {
          $scope.data = data;
      });
  }]);
