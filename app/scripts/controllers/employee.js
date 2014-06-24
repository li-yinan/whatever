'use strict';

angular.module('whateverApp')
  .controller('EmployeeCtrl', ["$scope", "Data", "dataUrl", "$routeParams", "Param", function ($scope, Data, url, $routeParams, Param) {
      var param = Param.get( 'recuitSearchParam' ) || {};
      Data.get(url.getRecuitList, param, function(data) {
          $scope.data = data;
      });
  }]);
