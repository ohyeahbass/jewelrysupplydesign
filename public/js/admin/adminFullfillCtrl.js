var adminApp=angular.module('adminApp');
adminApp.controller('adminFullfillCtrl', function($scope, adminService){
	adminService.getFullfilledOrders().then(function(res){
		$scope.orders=res.data;
		console.log($scope.orders)
	})
})