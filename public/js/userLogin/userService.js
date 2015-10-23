var adminApp=angular.module('adminApp');
adminApp.service('userService', function($http){
	
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
		}).then(function(err,res){
			
			if(err){return err;}
			else{return res.data;}
		})
	}
	this.getUserName=function(){
		return $http({
			method:"GET",
			url:'http://localhost:3000/user'
		}).then(function(err,res){
			
			if(err){console.log(err);return err;}
			else{return res.data;}
		})
	}
})