var adminApp=angular.module('adminApp');
adminApp.controller('userCtrl', function(userService, $scope, $location){
	userService.getUserName().then(function(res){
				if(res.data==='current user not defined'){$scope.customerName=null}
				else{
					$scope.customerName= res.data.name;
					$scope.customerAdmin=res.data.admin;
					$scope.loginOut=!$scope.loginOut;
					console.log(res)
				}
			});
	$scope.customerName='';
	$scope.submitNewUser=function(user){
		userService.newUserService(user);
	}
	
	$scope.loginSubmit=function(user){
		// var path = $location.path();
		userService.loginSubmit(user).then(function(res){
		userService.getUserName().then(function(res){
				if(res){
					$scope.customerName=res.data.name;
					$scope.loginOut=!$scope.loginOut;
					$('#loginModal').closeModal();
					$(document).ready(function() {
 						Materialize.toast('Welcome, '+ res.data.name, 4000, 'toasts')
					});
					$scope.customerAdmin=res.data.admin;
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