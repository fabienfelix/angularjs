'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.service'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({ redirectTo: '/view1' });
}]);

// .config(function($stateProvider) {
//   $stateProvider.state('entity', { // state for showing all movies
//     url: '/entity',
//     templateUrl: 'partials/entity.html',
//     controller: 'MovieListController'
//   }).state('viewMovie', { //state for showing single movie
//     url: '/entity/:id/view',
//     templateUrl: 'partials/movie-view.html',
//     controller: 'MovieViewController'
//   }).state('newMovie', { //state for adding a new movie
//     url: '/entity/new',
//     templateUrl: 'partials/movie-add.html',
//     controller: 'MovieCreateController'
//   }).state('editMovie', { //state for updating a movie
//     url: '/entity/:id/edit',
//     templateUrl: 'partials/movie-edit.html',
//     controller: 'MovieEditController'
//   });
// })

