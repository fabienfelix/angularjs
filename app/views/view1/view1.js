'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngCookies', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'views/view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', '$cookies', '$cookieStore', function($scope, $cookies, $cookieStore) {

    function Element(name) {
        this.name = name;
    }

    var element = $scope.element = {};

    var elements = $scope.elements = [];

    $scope.submit = function() {
        var elt = new Element(element.name);
        elements.push(elt);
    };

    $scope.save = function() {
        localStorage.setItem("elements", JSON.stringify(elements));
        alert("The data was saved.");
        return true;
    };

    $scope.refresh = function() {
        var elts = localStorage.getItem("elements");
        console.log(elts);
        $scope.elements = JSON.parse(elts);
        return true;
    };


    function Cookie(key, value) {
        this.key = key;
        this.value = value;
    }

    var cookie = $scope.cookie = Object.create(Cookie);

    $cookies.put('0', 'first cookie');

    $scope.submitCookie = function() {
        console.log('submitCookie ' + cookie.key + ' : ' + cookie.value);
        $cookies.put(cookie.key, cookie.value);
    };


    $scope.getCookie = function() {
        console.log('getCookie with key : ' + $scope.cookieKey);
        // console.log('cookie key : ' + $scope.cookieKey);
        $scope.cookieValue  = $cookies.get($scope.cookieKey);
        // chooseCookie = $cookie.get('0');
        // console.log(chooseCookie.key, chooseCookie.value);
    };




}]);
