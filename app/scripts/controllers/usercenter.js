'use strict';

angular.module('whateverApp')
  .controller('UsercenterCtrl', ["$scope", "Data", "dataUrl", "$routeParams", "$location", function ($scope, Data, url, $routeParams, $location) {
      $scope.editPwd = {};
      $scope.data = [
          {
              text: "我的订单",
              url: "#/"

          },
          {
              text: "我发布的消息",
              url: "#/"
          },
          {
              text: "我的招聘",
              url: "#/"
          }
      ];

      Data.get(url.getLoginUserName, {}, function(data) {
          $scope.username = data.username;
      });

      $scope.editPassword = function() {
          var dialog = angular.element("#alertMessage").scope();
          $scope.editPwd = {};
          $scope.title = "修改密码";
          dialog.openDialog(null,function() {
              var pwd = $scope.editPwd;
              if ( !pwd.oldPassword ) {
                  alert("请填写密码");
                  return false;
              }
              if ( pwd.newPassword != pwd.newPassword2 ) {
                  alert("密码不一致");
                  return false;
              }
              if ( !pwd.newPassword ) {
                  alert("请填写新密码");
                  return false;
              }
              Data.get(url.editPassword, {
                  old_pwd:pwd.oldPassword,
                  new_pwd:pwd.newPassword
              }, function(data) {
                  alert(data.statusInfo);
                  if (data.status==0) {
                      dialog.close();
                  }
              });
              return false;
          }, function() {
          });
          $scope.editPasswordData = {};
      };

      $scope.logout = function() {
          Data.get(url.logout, {}, function(data) {
              $location.path("/login");
          });
      };

      $scope.onOk = function() {
          console.log($scope);
      };
      $scope.onCancel = function() {
          console.log($scope);
      };


  }]);
