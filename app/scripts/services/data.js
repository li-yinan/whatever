'use strict';

angular.module('whateverApp')
  .service('Data', ["$http", "remoteServerDomain", function Data($http, domain) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var exports = {};
    var request = function(method, url, param, callback) {
        url = domain + url;
        $http[method](url, param).success(function(data) {
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

    exports.get = function(url, param, callback) {
        if(!/\?/.test(url)) {
            url += "?" + $.param(param);
        } else {
            url += "&" + $.param(param);
        }
        request("get", url, {}, callback);
    };

    exports.post = function(url, param, callback) {
        request("post", url, param, callback);
    };
    return exports;
  }]);
