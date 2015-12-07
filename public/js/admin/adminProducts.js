var adminApp=angular.module('adminApp');
adminApp.controller('adminProducts', function($scope, adminService, productsService, getDBProducts){
	productsService.getProducts().then(function(res){
		$scope.products=res.data
	})
	// $scope.productEdit=function(id,prod){
	// 	adminService.productEdit(id,prod).then(
	// 		function(res){
	// 			$scope.products=res.data
	// 		}
	// 	)
	// };	
	// $scope.deleteProduct=function(id){
	// 	adminService.deleteProduct(id).then(
	// 		function(res){
	// 			$scope.products=res.data
	// 	});
	// };
	$scope.getItem=function(id){ 
		adminService.getItem(id).then(
			function(res){

			}
		)
	}
});