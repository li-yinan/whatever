'use strict';

angular.module('whateverApp')
  .controller('CarindexCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      //var findById = function(dataList, key, id) {
      //    for(var i=0;i<dataList.length;i++) {
      //        if(dataList[i][key] == id) {
      //            return dataList[i];
      //        }
      //    }
      //};
      ////品牌
      //var brandDeferred = $.Deferred();
      //Data.get(url.getBrand, {}, function(data) {
      //    $scope.brandList = data.dataList;
      //    $scope.brand = findById(data.dataList, "brandId", +data.defaultBrand);
      //    brandDeferred.resolve();
      //});
      ////价格
      //var priceDeferred = $.Deferred();
      //Data.get(url.getPrice, {}, function(data) {
      //    $scope.priceList = data.dataList;
      //    $scope.price = findById(data.dataList, "priceId", +data.defaultPrice);
      //    priceDeferred.resolve();
      //});
      ////车龄
      //var usedtimeDeferred = $.Deferred();
      //Data.get(url.getUsedtime, {}, function(data) {
      //    $scope.usedtimeList = data.dataList;
      //    $scope.usedtime = findById(data.dataList, "usedtimeId", +data.defaultUsedtime);
      //    usedtimeDeferred.resolve();
      //});
      ////里程
      //var mileageDeferred = $.Deferred();
      //Data.get(url.getMileage, {}, function(data) {
      //    $scope.mileageList = data.dataList;
      //    $scope.mileage = findById(data.dataList, "mileageId", +data.defaultMileage);
      //    mileageDeferred.resolve();
      //});
      ////变速箱
      //var gearboxDeferred = $.Deferred();
      //Data.get(url.getGearbox, {}, function(data) {
      //    $scope.gearboxList = data.dataList;
      //    $scope.gearbox = findById(data.dataList, "gearboxId", +data.defaultGearbox);
      //    gearboxDeferred.resolve();
      //});
      //查询按钮
      var query = $scope.query = function() {
          var param = {
              brandId: $routeParams.brandId || "",
              priceId: $routeParams.priceId || "",
              usedtimeId: $routeParams.usedtimeId || "",
              mileageId: $routeParams.mileageId || "",
              gearboxId: $routeParams.gearboxId || ""
          };
          //param.brandId = $scope.brand.brandId;
          //param.priceId = $scope.price.priceId;
          //param.usedtimeId = $scope.usedtime.usedtimeId;
          //param.mileageId = $scope.mileage.mileageId;
          //param.gearboxId = $scope.gearbox.gearboxId;
          Data.get(url.carInit, param, function(data) {
              $scope.result = data;
          });
      };
      query();
      //当所有的select加载完成，进行一次查询
      //蛋疼的deferred,不过幸亏有deferred，要不更蛋疼
      //$.when(
      //    brandDeferred,
      //    priceDeferred,
      //    usedtimeDeferred,
      //    mileageDeferred,
      //    gearboxDeferred
      //       ).done(query);
  }]);
