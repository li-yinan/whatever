'use strict';

angular.module('whateverApp')
.directive('dialog', function () {
    return {
        templateUrl: "views/offcosui/dialog.html",
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: ["$scope", "$element","$timeout", function ($scope, $element, $timeout) {
            $scope.isShow = false;
            $scope.selfValue = $scope.value

            $scope.$on("valueChange", function (e, value) {
                $scope.selfValue = value;
            });

            $scope.openDialog = function(message, okCb, cancelCb) {
                if ( message ) {
                    $scope.title = "提示";
                    var html = '<div class="custom-message">' + message + '</div>';
                    $element.find(".dialog-content").html(html);
                }

                if ( typeof okCb == "function" ) {
                    $scope.alertOk = function() {
                        okCb();
                        delete $scope.alertOk;
                    }
                }

                if ( typeof cancelCb == "function" ) {
                    $scope.alertCancel = function() {
                        cancelCb();
                        delete $scope.alertCancel;
                    }
                }

                $scope.$broadcast("onOpen");
                $scope.isShow = true;
            };

            $scope.$on("opendialog", function() {
                $scope.$broadcast("onOpen");
                $scope.isShow = true;
            });

            $scope.$on("closedialog", function () {
                $scope.close();
            });

            $scope.onOk = function () {
                $scope.$emit("onOk", $scope.selfValue);
                if( $scope.alertOk ) {
                    $scope.alertOk();
                }
                $scope.close();
            };

            $scope.onCancel = function () {
                $scope.$emit("onCancel");
                if( $scope.alertCancel ) {
                    $scope.alertCancel();
                }
                $scope.close();
            };

            $scope.close = function () {
                $timeout( function () {
                    $scope.isShow = false;
                    $scope.$broadcast("onClose");
                }, 500);
            };
        }],
        link: function postLink(scope, element, attrs) {
            scope.type = element.attr("type");
            element.click( function ( e ) {
                return false;
            });
        }
    };
  });
