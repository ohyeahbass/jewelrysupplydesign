var adminApp=angular.module('adminApp');
adminApp.controller('adminController', function($scope, adminService){
	$scope.submitNewProduct=function(product){
		
		adminService.submitNewProduct(product)
	};
	$scope.adminGetProducts=function(){
		adminService.adminGetProducts().then(
			function(res){
				$scope.products=res.data
			}
		)
	};	
	$scope.deleteProduct=function(){}
	
});