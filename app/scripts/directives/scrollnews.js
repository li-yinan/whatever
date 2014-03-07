'use strict';

angular.module('whateverApp')
    .directive('scrollnews', ["Data", "dataUrl", function (Data, url) {
        return {
            templateUrl: "views/scrollnews.html",
            replace: true,
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                //set scroll direction from down to up
                scope.direction = "up";
                //set scroll speed to 1
                scope.speed = "1";
                //set text display in center
                scope.align = "middle";
                Data.get(url.scrollnews, function(data) {
                    scope.records = data;
                });
            }
        };
    }]);
