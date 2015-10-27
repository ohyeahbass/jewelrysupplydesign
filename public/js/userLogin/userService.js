var adminApp=angular.module('adminApp');
adminApp.service('userService', function($http,$q){
	
	this.newUserService=function(user){
		
		$http({
			method:'POST',
			url:'http://localhost:3000/user',
			data:user	
		}).then(function(err, res){
			if(err){ return err;}
			else{return res;};
		})
	}
	
	this.loginSubmit=function(user){
		return $http({
			method:"POST",
			url:'http://localhost:3000/login',
			data:user
		}).then(function(res,err){
			return res;
		})
	}
	this.getUserName=function(){
		var deferred=$q.defer()
		$http({
			method:"GET",
			url:'http://localhost:3000/user'
		}).then(function(res){
			var userName=res;
			deferred.resolve(userName)
		},function(err){
			deferred.reject(err)
		})			
		return deferred.promise	
		}
	
})