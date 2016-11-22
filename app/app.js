// Define the `phonecatApp` module
var appModule = angular.module('appModule', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
appModule.controller('IndexController', function IndexController($scope) {
    $scope.title = 'Mon titre';
});