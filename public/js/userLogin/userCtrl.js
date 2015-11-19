var adminApp=angular.module('adminApp');
adminApp.controller('userCtrl', function(userService, $scope, $location){
	
	$scope.customerName='';
	$scope.submitNewUser=function(user){
		userService.newUserService(user);
	}
	
	$scope.loginSubmit=function(user){
		// var path = $location.path();
		userService.loginSubmit(user).then(function(res){
		userService.getUserName().then(function(res){
				if(res){
					$scope.customerName='Welcome, ' + res.data.name;
					$scope.loginOut=!$scope.loginOut;
					$('#loginModal').closeModal();
					$(document).ready(function() {
 						Materialize.toast('Welcome, '+ res.data.name, 4000, 'toasts')
					});
				}
			});
			
		},function(err){
				console.log(err)
				if(err.status>300){
					$(document).ready(function() {
 						Materialize.toast('Login or password incorrect', 4000, 'toasts')
					});
				}
			});
		
	}

})