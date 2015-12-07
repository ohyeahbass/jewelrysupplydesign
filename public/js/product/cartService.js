var adminApp=angular.module('adminApp');
adminApp.service('cartService',function(){
	
 	var arr  = [];
	var d    = new Date(); 
	this.getLocalItems=function() {
		if (JSON.parse(localStorage.getItem('text'))) {
			arr = JSON.parse(localStorage.getItem('text'));
		};
		return arr;
	}
	this.addToCart = function(item) {
		$(document).ready(function() {
 			Materialize.toast('added to cart', 4000, 'toasts');
		});			
    	var checkItem = false;
		item.qty=1;
		item.itemTotal=item.pQ;
    	var items = {
		   sku:   			  item.sku,
     	   _id:   			  item._id,
     	   title: 			  item.title,
     	   img1:  			  item.img1,		   
     	   qty:   			  item.qty,
		   pQ:				  item.pQ,
		   itemTotal:		  item.itemTotal
    	};
    	arr.forEach(function(cartItem) {
       		 if(cartItem._id === item._id) {
       	     	cartItem.qty++;
       	     	checkItem = true;
        	 };
    	});

    	if(checkItem === false) {
        	arr.push(items);
    	};
		
    	localStorage.setItem('text', JSON.stringify(arr));
    	return arr;
	};
});