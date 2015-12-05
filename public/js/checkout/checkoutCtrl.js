var adminApp=angular.module('adminApp');
adminApp.controller('checkoutCtrl', function($scope, checkoutSrvc, userService, $location){
	function getProdInfo(){
		$scope.prodInfo=JSON.parse(localStorage.getItem('text'))
	}
	getProdInfo()
	console.log($scope.prodInfo,'arg')
	$scope.subTotal=0
	if($scope.prodInfo.length>0){
		addingSubTotal();	
	}	
	function addingSubTotal(){
		$scope.subTotal=0	
		for(var i=0;i<$scope.prodInfo.length;i++){		
			$scope.subTotal+=$scope.prodInfo[i].itemTotal	
		};
		$scope.total=$scope.subTotal 
		// $scope.prodInfo.total=$scope.total;
	};
	 
	
	
	
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
			$scope.prodInfo[i].itemTotal=$scope.prodInfo[i].qty*$scope.prodInfo[i].pQ;
			localStorage.setItem('text', JSON.stringify($scope.prodInfo))
			addingSubTotal();
			$scope.total=$scope.subTotal 
			// $scope.prodInfo.total=$scope.total;
			localStorage.setItem('text', JSON.stringify($scope.prodInfo))
			console.log($scope.prodInfo)
	}	
	$scope.minus=function(i){
		if($scope.prodInfo[i].qty>0){
			$scope.prodInfo[i].qty--;
			$scope.prodInfo[i].itemTotal=$scope.prodInfo[i].qty*$scope.prodInfo[i].pQ;
			localStorage.setItem('text', JSON.stringify($scope.prodInfo))
			addingSubTotal();
			$scope.total=$scope.subTotal ;
			// $scope.prodInfo.total=$scope.total;
			localStorage.setItem('text', JSON.stringify($scope.prodInfo))
			console.log($scope.prodInfo)
		}
	}
	
	// localStorage.setItem('text', JSON.stringify($scope.prodInfo))
	// console.log($scope.prodInfo)
	// userService.getUserName().then(function(res){
	// 	console.log(res,"user")
	// 	$scope.checkOutInfo=res.data;
	// })
	
});
