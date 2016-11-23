'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngCookies'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'views/view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', '$cookies', '$cookieStore', function($scope, $cookies, $cookieStore) {

    $scope.test = 0;

    $scope.view = {
        'title': 'View 1'
    };

    $scope.someArray = [{
        'id': 1,
        'name': 'view 1'
    }, {
        'id': 2,
        'name': 'view 2'
    }, {
        'id': 3,
        'name': 'Deb'
    }];

    $scope.myFuncTest = function() {
        $scope.test = $cookieStore.get('listName');
    };

    $scope.myFunc = function(id, name) {
        // $scope.test = id;
        $cookieStore.put('listId', id);
        $cookieStore.put('listName', name);
    };



}]);
