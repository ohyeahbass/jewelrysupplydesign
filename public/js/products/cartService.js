var adminApp=angular.module('adminApp');
adminApp.service('cartService',function(){
	
 	var arr      = [];

	this.getLocalItems=function() {
		if (JSON.parse(localStorage.getItem('text'))) {
			arr = JSON.parse(localStorage.getItem('text'));
		}
		return arr;
	}()
	this.addToCart = function(item) {

    	var checkItem = false;
    	var items = {
     	   qty: 1,
     	   _id: item._id,
     	   name: item.name,
     	   price: item.price,
     	   img1: item.img1
        
    	}

    	arr.forEach(function(cartItem) {
       		 if(cartItem._id === item._id) {
       	     cartItem.qty++;
       	     checkItem = true;
        	}
    	});

    	if(checkItem === false) {
        	arr.push(items);
    	}
    	localStorage.setItem('text', JSON.stringify(arr));
    	return arr;
	}
})