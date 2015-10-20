var adminApp=angular.module('adminApp');
adminApp.controller('userCtrl', function(userService, $scope, $location){
	
	$scope.submitNewUser=function(user){
		console.log('hello')
		userService.newUserService(user);
	}
	$scope.loginSubmit=function(user){
		console.log('hello')
		// var path = $location.path();
		userService.loginSubmit(user).then(function(res){
			console.log("Not running man")
		userService.getUserName().then(function(res){
			
				$scope.customerName=res.data.name;	
			});
			
		});
		
	}
	userService.getUserName().then(function(res){
			
				$scope.customerName=res.data.name;	
	});
	
})