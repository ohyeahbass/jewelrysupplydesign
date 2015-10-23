var adminApp=angular.module('adminApp');
adminApp.directive('adminOrderDir', function(){
	return{
		templateUrl:'js/admin/adminOrderTemplate.html',
		controller:function($scope, adminService){
			$scope.fulfillOrder=function(ord){
			adminService.fulfillOrder(ord)
			}
			
			$scope.getFulfillOrder=function(){
				adminService.getFulfillOrder().then(function(res){
					$scope.fullfilled=res.data
				})
			}
			
		}
	
	}
})