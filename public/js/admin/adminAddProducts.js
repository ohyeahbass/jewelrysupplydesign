var adminApp=angular.module('adminApp');
adminApp.controller('adminAddProducts', function($scope, adminService){
	adminService.submitNewProduct(product).then(function(res){
		if(res){
			$(document).ready(function(){
				Materialize.toast('item add' 4000, 'toasts');
			});
		};
	});
})