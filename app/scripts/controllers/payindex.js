'use strict';

angular.module('whateverApp')
  .controller('PayindexCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      $scope.submit = function() {
          var param = {};
          //处理服务项
          var sname = [];
          if($scope.water) { sname.push(1); }
          if($scope.electronic) { sname.push(2); }
          param.sname = sname.join(",");
          //处理地址
          param.communityID = ($scope.community||{}).communityId;
          param.addr = $scope.addr;
          param.name = $scope.name;
          param.sex = $scope.sex;
          param.phone = $scope.phone;
          param.timeId = ($scope.time||{}).timeId;
          param.message = $scope.message;
          console.log(param);
          Data.get(url.serviceTicket, param, function() {
              alert("提交订单成功");
          },function() {
              alert("提交订单失败，请重新提交");
          });
      };
      Data.get(url.community, {"cityId":"1"}, function(data) {
          $scope.communityList = data.dataList;
      });
      Data.get(url.time, {}, function(data) {
          $scope.timeList = data.dataList;
      });
  }]);
