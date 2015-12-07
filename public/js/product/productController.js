var adminApp=angular.module('adminApp');
adminApp.controller('productController', function($scope, productService, cartService, $routeParams, userService){

	productService.getDBProduct($routeParams.id).then(
		function(res){
			$scope.product=res;
			$scope.mainImage=$scope.product.img1;
			$scope.mainImg=function(img){
				$scope.mainImage=img;
			};
		}
	)
	$scope.addToCart=function(item){	
		cartService.addToCart(item);		
	};
	userService.getUserName().then(
		function(res){
			if(res.wholesaler===true){$scope.wholesaler=true}
			else{$scope.wholesaler=false}	
	});
	// $scope.breakPQ=function(brk){
	// 	console.log(brk)
	// };
})