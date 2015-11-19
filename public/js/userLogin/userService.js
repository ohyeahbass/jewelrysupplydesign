var adminApp=angular.module('adminApp');
adminApp.service('userService', function($http,$q){
	
	this.newUserService=function(user){
		
		$http({
			method:'POST',
			url:'/user',
			data:user	
		}).then(function(err, res){
			if(err){ console.log (err);}
			else{console.log(res);};
		})
	}
	
	this.loginSubmit=function(user){
		return $http({
			method:"POST",
			url:'/login',
			data:user
		}).then(function(res){
			return res;
			console.log(res)
		})
	}
	this.getUserName=function(){
		var deferred=$q.defer()
		$http({
			method:"GET",
			url:'/user'
		}).then(function(res){
			var userName=res;
			deferred.resolve(userName)
		},function(err){
			deferred.reject(err)
		})			
		return deferred.promise	
		}
	
})