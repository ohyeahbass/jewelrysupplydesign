var adminApp=angular.module('adminApp');
adminApp.controller('productController', function($scope, productService, cartService){
	$scope.product=productService.getter()
	$scope.addToCart=function(item){cartService.addToCart(item);}
	$scope.mainImage=$scope.product.img1
	$scope.mainImg=function(img){
		console.log('hello')
		$scope.mainImage=img
	}
})