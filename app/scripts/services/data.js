'use strict';

angular.module('whateverApp')
  .service('Data', ["$http", function Data($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var exports = {};
    var request = function(method, url, callback) {
        $http[method](url).success(function(data) {
            if(data.status == 0) {
                if(typeof callback == "function") {
                    callback(data.data);
                }
            } else {
                console.log("error!!! " + data.statusInfo);
            }
        }).error(function(e) {
            console.log("get data error!!!\n" + e + "\n" + url);
        });
    }

    exports.get = function(url,callback) {
        request("get", url, callback);
    };

    exports.post = function(url,callback) {
        request("post", url, callback);
    };
    return exports;
  }]);
