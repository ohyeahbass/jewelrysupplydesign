var adminApp=angular.module('adminApp');
adminApp.service('adminService',['$http', '$q', function($http, $q){
	this.submitNewProduct=function(product){
		var deferred=$q.defer();
		$http({
			method:'POST',
			url:'/products',
			data:product
		}).then(
			function(response){
				var products=response.data;
				deferred.resolve(products)	
			})
			return deferred.promise
	}
	
	this.adminGetProducts=function(){
		var deferred=$q.defer();
		$http({
			method:"GET",
			url:'/products'
		}).then(
			function(res){
				var products=res;
				deferred.resolve(products)
		})
		return deferred.promise
	}
	
	this.productEdit=function(id,prod){
		var updatedProd={
			id:id,
			updatedProd:prod
		}
		return $http({
			method:'PUT',
			url:'/products',
			data:updatedProd
		})
		
	}
	this.deleteProduct=function(id){
		return $http({
			method:"DELETE",
			url:'/products/'+id
			
		})
	}
	
	this.getOrder=function(){
		var deferred=$q.defer();
		$http({
			method:"GET",
			url:'/order'
		}).then(function(res){
		
			var order=res;

			deferred.resolve(order)
		})
		return deferred.promise
	}
	
	this.fulfillOrder=function(ord){
		return $http({
			method:"POST",
			url:'/fulfill',
			data:ord
		}).then(function(res){
			return res.data
		})
	}
	this.deleteGetOrder=function(id){
		return $http({
			method:"DELETE",
			url:'/order/'+id
			
		})
	}
	this.getFulfillOrder=function(){
		return $http({
			method:'GET',
			url:'/fulfill'
		}).then(function(res){
			
			return res.data
			
		})
	}
	
}])