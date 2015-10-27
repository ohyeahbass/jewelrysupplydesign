var adminApp=angular.module('adminApp');
adminApp.directive('adminOrderDir', function(){
	return{
		templateUrl:'js/admin/adminOrderTemplate.html',
		controller:function($scope, adminService){
			$scope.fulfillOrder=function(ord){
				adminService.fulfillOrder(ord).then(function(res){
					console.log(res._id)
					adminService.deleteGetOrder(res._id)
				})
			}
			
		}
	
	}
})