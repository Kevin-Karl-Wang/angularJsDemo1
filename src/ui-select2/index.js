/**
 * Created by kevinWang on 2016/6/17.
 */
angular.module('myApp', ['ui'])
    .value('ui-config', {
        select2: {
            allowClear: true,
            match: function (term, text, opt) {
                var code = opt.attr('code') || "";
                return code.toUpperCase().indexOf(term.toUpperCase()) >= 0
                    || text.toUpperCase().indexOf(text.toUpperCase()) >= 0
            }
        }
    })
    .controller('myController', ['$scope', function ($scope) {

    }]);