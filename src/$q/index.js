/**
 * Created by kevinWang on 2016/6/17.
 */
angular.module('myApp', []).controller('myController', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    var url = "http://localhost:8051/heren/api/drug-info-list/drug-name";
    var param = {
        "inputCode": "",
        "prescAttr": "普通",
        "prescType": 0,
        "seaechType": "M"
    };
    $scope.inputCode = "";
    $scope.drugNameList = [];
    $scope.getDrugNameList = function (callback) {
        var deferred = $q.defer;
        $http.post(url, param)
            .success(function (data) {
                deferred.notify("请求成功！");
                $scope.drugNameList = data;
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(error);
                console.log(error);
            });
        return deferred.promise;
    };
    $scope.$watch("inputCode", function (newVal, oldVal) {
        if (newVal) {
            param.inputCode = newVal;
            $scope.getDrugNameList().then(function (data) {
                getFirstResult(data);
            }, function (error) {
                console.log(error)
            }, function (info) {
                console.log(info);
            })
        }
    });
    function getFirstResult(data) {
        console.log(data[0]);
    }
}]);