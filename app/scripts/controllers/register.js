'use strict';

angular.module('whateverApp')
  .controller('RegisterCtrl', ["$scope", "Data", "dataUrl", "$timeout", "$location", function ($scope, Data, url, $timeout, $location) {
      var uuid = "";
      if(window.device) {
          uuid = device.uuid || "";
      }
      $scope.register = function() {
          var param = {};
          var alertScope = angular.element("#alertMessage").scope();
          param.uuid = uuid;
          param.username = $scope.username;
          if(!param.username) {
              alertScope.openDialog("请输入昵称");
              return;
          }
          param.password = $scope.password;
          if(!param.password) {
              alertScope.openDialog("请输入密码");
              return;
          }
          if($scope.password !== $scope.confirmPassword) {
              alertScope.openDialog("密码不一致，请重新输入密码");
              $scope.password ="";
              $scope.confirmPassword = "";
              return;
          }
          //发送注销请求
          Data.get(url.register, param, function(data) {
              if ( data.status === 0 ) {
                  alertScope.openDialog( "注册成功", function() {
                      $location.path("/");
                  } );
              } else {
                  alertScope.openDialog(data.statusInfo);
              }
          });
      }
  }]);
