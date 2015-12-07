var adminApp=angular.module('adminApp');
adminApp.controller('adminOrderCtrl', function($scope, adminService, getOrders){
	$scope.orders=getOrders.data;
	$scope.fulfillOrder=function(ord){
		adminService.fulfillOrder(ord).then(function(res){
			adminService.deleteGetOrder(res._id);
		});
	};
});