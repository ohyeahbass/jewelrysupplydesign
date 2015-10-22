var adminApp=angular.module('adminApp');
adminApp.factory('productService', function($http, $q){
	var item = null
	return { setter: function(product){
		item=product;		
		},
			 getter: function(){
				 console.log(item)
		return item;
		
		}
	}
	
})