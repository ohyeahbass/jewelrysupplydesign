var adminApp=angular.module('adminApp');
adminApp.service('productsService', function($http, $q){
	this.getProducts=function(){
		var deferred=$q.defer();
		$http({
			method:"GET",
			url:'/products'
		}).then(
			function(res){
				var products=res;
				deferred.resolve(products);
			})		
		return deferred.promise;
	};
});