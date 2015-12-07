var adminApp=angular.module('adminApp', ['ngRoute', 'ui.materialize']);
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
					});
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
		.when('/tutorials',{
			templateUrl:'js/tutorials/tutorials.html'	
		})
		.when('/productPage/:id',{
			templateUrl:'js/product/productPage.html',
			controller:'productController',
			resolve:{
				getLocalItems: function() {
					return JSON.parse(localStorage.getItem('text'));
				}
			}
		})
		.when('/adminProducts',{
			templateUrl:'js/admin/adminProducts.html',
			controller:'adminProducts',
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
		.when('/adminOrderTemplate', {
			templateUrl:'js/admin/adminOrderTemplate.html',
			controller:"adminOrderCtrl",
			resolve:{
				getOrders: function(adminService){
					return adminService.getOrder().then(
					function(res){
						console.log(res)
						return res;	
					}) 
				}
			}
		})
		.when('/adminFullfilledOrders',{
			templateUrl:'js/admin/adminFullfilledOrders.html',
			controller:'adminFullfillCtrl',
		})
		.when('/adminEditProduct',{
			templateUrl:'js/admin/adminEditProduct',
			controller:'adminEditProductCtrl',
		})
		.otherwise('/',{
			redirectTo:'/'
		})
		
})