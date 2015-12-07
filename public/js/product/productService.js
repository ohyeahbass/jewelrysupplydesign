var adminApp=angular.module('adminApp');
adminApp.service('productService', function($http){

	this.getDBProduct=function(id){
		return $http({
			method:"GET",
			url:'/products/'+id
		}).then(
			function(res){
				var product=res.data;
				return product;
			})
	
	}
});