'use strict';

angular.module('whateverApp')
  .controller('PayindexCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      $scope.submit = function() {
          console.log($scope);
      };
      Data.get(url.community, {"cityId":"1"}, function(data) {
          $scope.community = data.dataList;
      });
      //$scope.community = [{
      //      communityName:"小区1",
      //      communityId:"1",
      //  },{
      //      communityName:"小区2",
      //      communityId:"2",
      //  },{
      //      communityName:"小区3",
      //      communityId:"3",
      //  }];
  }]);
