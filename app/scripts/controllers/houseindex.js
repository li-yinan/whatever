'use strict';

angular.module('whateverApp')
  .controller('HouseindexCtrl', ["$scope", "Data", "dataUrl", "$routeParams", "Param", function ($scope, Data, url, $routeParams, Param) {

      $scope.cur = Param.get("cur") || "tab1";
      $scope.type = "houseDetail";
      Param.set("cur", $scope.cur);

      $scope.clickTab1 = function() {
          if ( $scope.cur == "tab1" ) {
              return;
          }
          $scope.type = "houseDetail";
          $scope.cur = "tab1";
          Param.set("cur", $scope.cur);
          Param.clear("param");
          query(url.housequery1);
      };
      $scope.clickTab2 = function() {
          if ( $scope.cur == "tab2" ) {
              return;
          }
          $scope.type = "rentDetail";
          $scope.cur = "tab2";
          Param.set("cur", $scope.cur);
          Param.clear("param");
          query(url.housequery2);
      };

      //查询按钮
      var query = $scope.query = function(queryUrl) {
          var param = Param.get("param");
          queryUrl = queryUrl || url.houseInit;
          Data.get(queryUrl, param, function(data) {
              $scope.result = data;
          });
      };
      query();
  }]);
