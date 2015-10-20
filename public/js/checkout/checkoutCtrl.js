var adminApp=angular.module('adminApp');
adminApp.controller('checkoutCtrl', function($scope){
	function getProdInfo(){
	$scope.prodInfo=JSON.parse(localStorage.getItem('text'))
	}
	getProdInfo()
	$scope.total=0
	if($scope.prodInfo.length>0){
		addingTotal();
	}	
	// function addingTotal(){	
	// 	for(var i=0;i<$scope.prodInfo.length;i++){
	// 		for(var key in $scope.prodInfo[i]){
	// 			if(key==='price'){
	// 				$scope.total=($scope.prodInfo[i][key]*$scope.prodInfo[i][1])+$scope.total
	// 				console.log($scope.total)
	// 			}
	// 		}
	// 	}
	// }	
		
})