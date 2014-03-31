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
          if(!param.sname) {
              alert("请选择服务种类");
              return;
          }
          //处理地址
          param.communityId = ($scope.community||{}).communityId;
          if(!param.communityId) {
              alert("请选择小区");
              return;
          }
          param.addr = $scope.addr;
          if(!param.addr) {
              alert("请填写地址");
              return;
          }
          param.name = $scope.name;
          param.sex = $scope.sex;
          param.phone = $scope.phone;
          if(!param.phone) {
              alert("请填写手机");
              return;
          }
          param.timeId = ($scope.time||{}).timeId;
          if(!param.timeId) {
              alert("请选择上门服务时间");
              return;
          }
          param.message = $scope.message;
          //console.log(param);
          Data.post(url.serviceTicket, param, function() {
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
