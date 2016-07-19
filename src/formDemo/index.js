/**
 * Created by kevinWang on 2016/7/14.
 */
angular.module('myApp', [])
    .filter('cityFilter', function () {
        return function (data, parent) {
            var cityData = [];
            angular.forEach(data, function (item, index) {
                if (item.parent === parent) {
                    cityData.push(item);
                }
            });
            return cityData;
        }
    })
    .controller('myController', ['$scope', function ($scope) {
        $scope.hobbies = [{id: 1, name: "玩游戏"}, {id: 2, name: "看电影"}, {id: 3, name: "打篮球"}];
        $scope.cities = [
            {id: 1, parent: 0, name: "上海"},
            {id: 2, parent: 1, name: "上海市"},
            {id: 3, parent: 2, name: "徐汇区"},
            {id: 4, parent: 2, name: "上宁区"},
            {id: 5, parent: 0, name: "北京"},
            {id: 6, parent: 5, name: "北京市"},
            {id: 7, parent: 6, name: "东城区"},
            {id: 8, parent: 6, name: "海淀区"},
            {id: 9, parent: 6, name: "丰台区"},
            {id: 10, parent: 0, name: "浙江省"},
            {id: 11, parent: 10, name: "杭州市"},
            {id: 12, parent: 11, name: "西湖区"},
            {id: 13, parent: 10, name: "宁波市"}];
        $scope.hobbys = [1, 2];
        $scope.toggleHobbySelect = function (id) {
            var index = $scope.hobbys.indexOf(id);
            if (index === -1) {
                $scope.hobbys.push(id)
            } else {
                $scope.hobbys.splice(index, 1);
            }
            console.log($scope.hobbys);
        }

    }]);