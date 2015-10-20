var adminApp=angular.module('adminApp', ['ngRoute']);
adminApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl:'js/home/home.html',
			controller:'homeCtrl'
		})	
		.when('/admin',{
			templateUrl:'js/admin/admin.html',
			controller:'adminController',
			resolve:{
				getAdmin:function(userService, $location){
					userService.getUserName().then(function(res){
						if(res.data.admin!==true){
							$location.path('/');
						};	
					})
				}
			}
		})
		.when('/productsList', {
			templateUrl:'js/products/productsList.html',
			controller:'productsController',
			resolve: {
				getDBProducts: function(productsService) {
					return productsService.getProducts().then(function(res) {
						return res;
					});
				},
				getLocalItems: function() {
					return JSON.parse(localStorage.getItem('text'));
				}
			}
		})
		.when('/about',{
			templateUrl:'js/about/about.html'
		})
		.when('/contact',{
			templateUrl:'js/contact/contact.html'
		})
		.when('/checkout',{
			templateUrl:"js/checkout/checkout.html",
			controller:'checkoutCtrl'
		})
		.otherwise('/',{
			redirectTo:'/'
		})
		
})