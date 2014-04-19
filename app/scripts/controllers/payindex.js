'use strict';

angular.module('whateverApp')
  .controller('PayindexCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      //设置默认性别选项值
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
      //创建小区的deferred对象，用于小区和时间两个异步操作完成之后加载历史数据
      var communityDeferred = $.Deferred();
      //获取小区
      Data.get(url.community, {"cityId":"1"}, function(data) {
          $scope.communityList = data.dataList;
          //找到默认选择的小区
          for(var i=0;i<data.dataList.length;i++) {
              if(data.defaultCommunity == $scope.communityList[i].communityId) {
                  $scope.community = $scope.communityList[i];
              }
          }
          communityDeferred.resolve();
      });
      //创建服务时间的deferred对象，用于小区和时间两个异步操作完成之后加载历史数据
      var timeDeferred = $.Deferred();
      //获取服务时间
      Data.get(url.time, {}, function(data) {
          $scope.timeList = data.dataList;
          //找到默认选择的服务时间
          for(var i=0;i<data.dataList.length;i++) {
              if(data.defaultTime == $scope.timeList[i].timeId) {
                  $scope.time = $scope.timeList[i];
              }
          }
          timeDeferred.resolve();
      });
      $.when(communityDeferred,timeDeferred).done(function() {
          Data.get(url.getHistory, {}, function(data) {
              //回填水费
              if(/1/.test(data.sname)) {
                  $scope.water = true;
              }
              //回填电费
              if(/2/.test(data.sname)) {
                  $scope.electronic = true;
              }
              //回填小区
              for(var i=0;i<$scope.communityList.length;i++) {
                  if($scope.communityList[i].communityId == data.communityId) {
                      $scope.community = $scope.communityList[i];
                      break;
                  }
              }
              //回填地址
              $scope.addr = data.addr || "";
              //回填姓名
              $scope.name = data.name || "";
              //回填性别
              $scope.sex = data.sex || "";
              //回填电话
              $scope.phone = data.phone || "";
              //回填上门服务时间
              for(var i=0;i<$scope.timeList.length;i++) {
                  if($scope.timeList[i].timeId == data.timeId) {
                      $scope.time = $scope.timeList[i];
                      break;
                  }
              }
              //回填备注
              $scope.message = data.message || "";
          });
      });
  }]);
