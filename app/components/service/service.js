angular.module('myApp.service', []).factory('Entity', function($resource) {
  return $resource('http://localhost:8100/api/entity/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});