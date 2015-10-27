var adminApp=angular.module('adminApp');
adminApp.directive('adminProductDir', function(){
	return{
		templateUrl:'js/admin/adminProductTemplate.html',
		controller:function($scope, adminService){
			
			$scope.productEdit=function(id,prod){
				adminService.productEdit(id,prod).then(
					function(res){
						console.log(res);
						$scope.products=res.data
				    })
		    };	
			$scope.deleteProduct=function(id){
				adminService.deleteProduct(id).then(
					function(res){
						$scope.products=res.data
					}
				)
			}
		}
	}
})