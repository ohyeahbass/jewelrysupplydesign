var adminApp=angular.module('adminApp');
adminApp.controller('homeCtrl', function($location, $scope, productsService){
	
	productsService.getDBProducts=function(productsService) {
		return productsService.getProducts().then(
			function(res) {
				return res;
		});
	};
});