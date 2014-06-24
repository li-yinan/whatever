'use strict';

angular.module('whateverApp')
  .controller('CcCtrl',["$scope", "Param", "Data", "dataUrl", function ($scope, Param, Data, url) {
      var textArr = Param.get("ccText");
      $scope.textArr = textArr;
      Data.get(url.getPhone, {}, function(data) {
          $scope.phone = data.phone;
      });
      $scope.title = Param.get("topBarTitle");
  }]);
