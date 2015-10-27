var adminApp=angular.module('adminApp');
adminApp.controller('ShoppingCartCtrl', function($scope, cartService){
	

	console.log("hi")
	$scope.cartCount=0
	function totalCart(){
		var toats=JSON.parse(localStorage.getItem('text'))
		var array=[]
						
		for(var prop in toats){		
			array.push(toats[prop].qty)	
		}
		for(var i=0;i<array.length;i++){
			var num=Number(array[i])
			$scope.cartCount+=num
		}
		return $scope.cartCount
	}
	totalCart()
	
	
			
			
})