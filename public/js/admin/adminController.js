var adminApp=angular.module('adminApp');
adminApp.controller('adminController', function($scope, adminService){
	$scope.submitNewProduct=function(product){
		console.log("submit")
		adminService.submitNewProduct(product).then(function(res){
			if(res){
				$(document).ready(function() {
 					Materialize.toast('item add', 4000, 'toasts')
				});
			};
		});
	};
	
	
	$scope.adminGetProducts=function(){
		adminService.adminGetProducts().then(
			function(res){
				$scope.products=res.data;
			}
		);
	};
	
		

	

	$scope.getFulfillOrder=function(){
		adminService.getFulfillOrder().then(
			function(res){
				$scope.fulfilled=res;
		});
	};
});