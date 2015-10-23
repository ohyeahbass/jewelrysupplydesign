var adminApp=angular.module('adminApp');
adminApp.controller('userCtrl', function(userService, $scope, $location){
	
	
	$scope.submitNewUser=function(user){
		userService.newUserService(user);
	}
	$scope.loginSubmit=function(user){
		// var path = $location.path();
		userService.loginSubmit(user).then(function(res){
		userService.getUserName().then(function(res){
				if(res){
					$scope.customerName=res.data.name;
					$(document).ready(function() {
 						Materialize.toast('Successful Login', 4000, 'toasts')
					});
				}
				// else if(401){
				// 	$(document).ready(function() {
 				// 		Materialize.toast('Login or password incorrect', 4000, 'toasts')
				// 	});
				// }
					
			});
			
		});
		
	}
	userService.getUserName().then(function(res){
				$scope.customerName=res.data.name;	
	});
	
})