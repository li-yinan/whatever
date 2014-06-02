'use strict';

angular.module('whateverApp')
  .controller('PayindexCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      //设置默认性别选项值
      $scope.sex = 1;
      $scope.title = "提示";
      $scope.sexData = [{
          id:1,
          text: "先生"
      },{
          id:2,
          text: "女士"
      }];
      $scope.$on("valueChange", function(event,value) {
          $scope.sex = value;
      });
      $scope.submit = function() {
          var param = {};
          var alertScope = angular.element("#alertMessage").scope();
          //处理地址
          param.communityId = $scope.communityList.value;
          if(!param.communityId) {
              alertScope.openDialog("请选择小区");
              return;
          }
          param.addr = $scope.addr;
          if(!param.addr) {
              alertScope.openDialog("请填写地址");
              return;
          }
          param.name = $scope.name;
          param.sex = $scope.sex;
          param.phone = $scope.phone;
          if(!param.phone) {
              alertScope.openDialog("请填写手机");
              return;
          }
          param.timeId = $scope.timeList.value;
          if(!param.timeId) {
              alertScope.openDialog("请选择上门服务时间");
              return;
          }
          param.message = $scope.message;

          Data.post(url.serviceTicket, param, function() {
              alertScope.openDialog("提交订单成功");
          },function() {
              alertScope.openDialog("提交订单失败，请重新提交");
          });
      };
      //创建小区的deferred对象，用于小区和时间两个异步操作完成之后加载历史数据
      var communityDeferred = $.Deferred();
      //获取小区
      Data.get(url.community, {"cityId":"1"}, function(data) {
          $scope.communityList = data;
          $scope.communityList.label = "";
          communityDeferred.resolve();
      });
      //创建服务时间的deferred对象，用于小区和时间两个异步操作完成之后加载历史数据
      var timeDeferred = $.Deferred();
      //获取服务时间
      Data.get(url.time, {}, function(data) {
          $scope.timeList = data;
          $scope.timeList.label = "";
          timeDeferred.resolve();
      });
      $.when(communityDeferred,timeDeferred).done(function() {
          Data.get(url.getHistory, {}, function(data) {
              //回填地址
              $scope.addr = data.addr || "";
              //回填姓名
              $scope.name = data.name || "";
              //回填性别
              $scope.sex = data.sex || "";
              //回填电话
              $scope.phone = data.phone || "";
              //回填备注
              $scope.message = data.message || "";
          });
      });
  }]);
