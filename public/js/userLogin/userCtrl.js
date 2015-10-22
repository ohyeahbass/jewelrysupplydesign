var adminApp=angular.module('adminApp');
adminApp.controller('userCtrl', function(userService, $scope, $location){
	
	$scope.submitNewUser=function(user){
		alert('Thanks for signing up!')
		userService.newUserService(user);
	}
	$scope.loginSubmit=function(user){
		// var path = $location.path();
		userService.loginSubmit(user).then(function(res){
		userService.getUserName().then(function(res){
				alert('Signed In!')
				$scope.customerName=res.data.name;	
			});
			
		});
		
	}
	userService.getUserName().then(function(res){
				$scope.customerName=res.data.name;	
	});
	
})