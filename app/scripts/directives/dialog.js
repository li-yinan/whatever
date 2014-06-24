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
                $scope.title = $scope.title || "提示";
                if ( message ) {
                    var html = '<div class="custom-message">' + message + '</div>';
                    $element.find(".dialog-content").html(html);
                }

                if ( typeof okCb == "function" ) {
                    $scope.alertOk = function() {
                        var ret = okCb();
                        if ( ret !== false ) {
                            delete $scope.alertOk;
                        }
                        return ret;
                    }
                }

                if ( typeof cancelCb == "function" ) {
                    $scope.alertCancel = function() {
                        var ret = cancelCb();
                        if ( ret !== false ) {
                            delete $scope.alertCancel;
                        }
                        return ret;
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
                var ret = true;
                $scope.$emit("onOk", $scope.selfValue);
                if( $scope.alertOk ) {
                    ret = $scope.alertOk();
                }
                if(ret !== false) {
                    $scope.close();
                }
            };

            $scope.onCancel = function () {
                var ret = true;
                $scope.$emit("onCancel");
                if( $scope.alertCancel ) {
                    ret = $scope.alertCancel();
                }
                if(ret !== false) {
                    $scope.close();
                }
            };

            $scope.close = function () {
                $timeout( function () {
                    $scope.isShow = false;
                    $scope.$broadcast("onClose");
                }, 500);
                delete $scope.alertOk;
                delete $scope.alertCancel;
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
