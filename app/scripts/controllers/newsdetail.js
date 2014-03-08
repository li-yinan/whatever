'use strict';

angular.module('whateverApp')
  .controller('NewsdetailCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      Data.get(url.newsDetail, {"id":$routeParams.id}, function(data) {
          $scope.data = data;
      });
  }]);
