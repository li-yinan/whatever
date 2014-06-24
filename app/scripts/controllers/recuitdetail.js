'use strict';

angular.module('whateverApp')
  .controller('RecuitdetailCtrl', ["$scope", "Data", "dataUrl", "$routeParams", "$location", "Param", function ($scope, Data, url, $routeParams, $location, Param) {
      $scope.cur = 'tab1';
      Data.get(url.getRecuitDetail, {"id":$routeParams.id}, function(data) {
          $scope.data = data;
      });

      $scope.applyJob = function() {
          Param.set("topBarTitle","职位申请");
          Param.set("ccText","");
          $location.path("/cc");
      };
  }]);
