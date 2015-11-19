var adminApp=angular.module('adminApp');
adminApp.service('checkoutSrvc', function($http){
	
	this.checkOut=function(prodInfo){
		return $http({
			method:"POST",
			url:'/order',
			data: prodInfo
		})
	}
	
})
	
