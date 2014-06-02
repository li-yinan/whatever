'use strict';

angular.module('whateverApp')
  .controller('CarindexCtrl', ["$scope", "Data", "dataUrl", "$routeParams", "Param",function ($scope, Data, url, $routeParams, Param) {
      //查询按钮
      var query = $scope.query = function() {
          var param = Param.get("param");
          Data.get(url.carInit, param, function(data) {
              $scope.result = data;
          });
      };
      query();
  }]);
