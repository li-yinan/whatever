'use strict';

angular.module('whateverApp')
  .controller('RegisterCtrl', ["$scope", "Data", "dataUrl", "$timeout", "$location", function ($scope, Data, url, $timeout, $location) {
      var uuid = "";
      if(window.device) {
          uuid = device.uuid || "";
      }
      $scope.register = function() {
          var param = {};
          param.uuid = uuid;
          param.username = $scope.username;
          if(!param.username) {
              alert("请输入昵称");
              return;
          }
          param.password = $scope.password;
          if(!param.password) {
              alert("请输入密码");
              return;
          }
          if($scope.password !== $scope.confirmPassword) {
              alert("密码不一致，请重新输入密码");
              $scope.password ="";
              $scope.confirmPassword = "";
              return;
          }
          //发送注销请求
          Data.get(url.register, param, function(data) {
              if(data.status === 0) {
                  $("#logState")
                      .removeClass("log-state-1")
                      .addClass("log-state-2");
                  alert("注册成功");
                  $location.path("/");
              } else {
                  alert(data.statusInfo);
              }
          });
      }
  }]);
