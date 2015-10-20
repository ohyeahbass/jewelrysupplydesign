var adminApp=angular.module('adminApp');
adminApp.service('productsService', function($http, $q){
	this.getProducts=function(){
	var deferred=$q.defer();
	
	$http({
		method:"GET",
		url:'http://localhost:3000/products'
	}).then(
		function(res){
			console.log(res)
			var products=res.data;
			deferred.resolve(products);
		})		
		return deferred.promise;
	}
})