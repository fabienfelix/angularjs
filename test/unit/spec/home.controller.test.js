describe('home --> ', function () {

  //console.log("hi !");

  beforeEach(module('myApp.view1', ['ngRoute', 'ngCookies']));

  var $controller, $scope;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_('View1Ctrl', { $scope: $scope });
    $scope = {};
  }));

  describe('Functions --> ', function () {
		it('myFuncTest()', function () {
			$scope.myFunc(0,'myListName');
			$scope.myFuncTest();
			expect($scope.test).toBe($cookieStore.get('listName'));
		});	
	});

});