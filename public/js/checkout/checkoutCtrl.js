var adminApp=angular.module('adminApp');
adminApp.controller('checkoutCtrl', function($scope, checkoutSrvc, userService, $location){
	function getProdInfo(){
	$scope.prodInfo=JSON.parse(localStorage.getItem('text'))
	}
	getProdInfo()
	$scope.subTotal=0
	if($scope.prodInfo.length>0){
		addingSubTotal();
		
	}	
	function addingSubTotal(){	
		for(var i=0;i<$scope.prodInfo.length;i++){
					$scope.subTotal+=$scope.prodInfo[i].qty*$scope.prodInfo[i].price;	
		};
	};
	$scope.total=$scope.subTotal;
	$scope.shipping=function(option){
		console.log(option)
		if(2===option||5===option){
			$scope.total=$scope.subTotal+10 
		}
		else{
			$scope.total=$scope.subTotal 
		}
		return $scope.total
	}
	
	$scope.payNow=function(prodInfo){
		var buy=confirm('Ok to confirm purchase')
		if(buy){
		checkoutSrvc.checkOut(prodInfo).then(function(res){
			alert('thanks for purchase!');
			$('#checkoutModal').closeModal();
			localStorage.clear('text');
			$location.path('/');	
		})
		
		}
	}
	$scope.plus=function(i){
			
			$scope.prodInfo[i].qty++;
			localStorage.setItem('text', JSON.stringify($scope.prodInfo));
			$scope.subTotal+=$scope.prodInfo[i].price;
			$scope.total=$scope.subTotal;
			
		
	}	
	$scope.minus=function(i){
		
		$scope.prodInfo[i].qty--;
		localStorage.setItem('text', JSON.stringify($scope.prodInfo));
		$scope.subTotal-=$scope.prodInfo[i].price;
		$scope.total=$scope.subTotal;
	}
	
	
	// userService.getUserName().then(function(res){
	// 	console.log(res,"user")
	// 	$scope.checkOutInfo=res.data;
	// })
	
});