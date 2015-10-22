var adminApp=angular.module('adminApp');
adminApp.controller('checkoutCtrl', function($scope, checkoutSrvc, $location){
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
		if(1===option){
			
			$scope.total=$scope.subTotal+10 
		}
		else if(2===option){
			$scope.total=$scope.subTotal 
		}
		else if(3===option){
			$scope.total=$scope.subTotal 
		}
		else if(4===option){
			$scope.total=$scope.subTotal 
		}
		else if(5===option){
			$scope.total=$scope.subTotal +10
		}
		else{$scope.total=$scope.subTotal}
		return $scope.total
	}
	
	$scope.payNow=function(prodInfo){
		var buy=confirm('Ok to confirm purchase')
		if(buy){
		checkoutSrvc.checkOut(prodInfo)
		alert('thanks for purchase!')
		localStorage.clear('text')
		$location.path('/')
		}
	}	
		
});