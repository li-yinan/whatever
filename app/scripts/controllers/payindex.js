'use strict';

angular.module('whateverApp')
  .controller('PayindexCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      $scope.sex = 1;
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
      //获取小区
      Data.get(url.community, {"cityId":"1"}, function(data) {
          $scope.communityList = data.dataList;
          //找到默认选择的小区
          for(var i=0;i<data.dataList.length;i++) {
              if(data.defaultCommunity == $scope.communityList[i].communityId) {
                  $scope.community = $scope.communityList[i];
              }
          }
      });
      //获取服务时间
      Data.get(url.time, {}, function(data) {
          $scope.timeList = data.dataList;
          //找到默认选择的服务时间
          for(var i=0;i<data.dataList.length;i++) {
              if(data.defaultTime == $scope.timeList[i].timeId) {
                  $scope.time = $scope.timeList[i];
              }
          }
      });
  }]);
