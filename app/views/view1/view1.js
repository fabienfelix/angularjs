'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngCookies', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'views/view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', '$cookies', '$cookieStore', function($scope, $cookies, $cookieStore) {

    function newUuid() {
        var date = new Date();
        return date.getTime();
    };


    // LOCAL STORAGE

    function Element(id, name) {
        this.id = id;
        this.name = name;
    };

    var element = $scope.element = {};

    var elements = $scope.elements = [];

    $scope.submitElement = function() {
        var elt = new Element(newUuid(), element.name);
        elements.push(elt);
    };

    $scope.saveElements = function() {
        console.log($scope.elements);
        localStorage.setItem("elements", JSON.stringify(elements));
        Materialize.toast('Saved !', 2000);
        // alert("The data was saved.");
        return true;
    };

    $scope.refreshElements = function() {
        var elts = localStorage.getItem("elements");
        elts = JSON.parse(elts);
        var i = 0;
        elements = [];
        for (var elt of elts){
            elements.push(new Element(elt.id, elt.name));
            i++;
        }
        $scope.elements = elements;
        Materialize.toast('Refreshed !', 1000);
        return true;
    };


    // COOKIES

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
        $scope.cookieValue = $cookies.get($scope.cookieKey);
    };




}]);
