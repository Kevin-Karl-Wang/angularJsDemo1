/**
 * Created by kevinWang on 2016/6/2.
 */
angular.module('myApp', ['ui.bootstrap']).controller('html5Demo', function ($scope) {
    $scope.oneAtATime = true;
    $scope.groups = [{
        title: 'one-1',
        content: 'one-1-content'
    }, {
        title: 'one-2',
        content: 'one-2-content'
    }];
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addItem = function () {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item' + newItemNo)
    };
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    }
});