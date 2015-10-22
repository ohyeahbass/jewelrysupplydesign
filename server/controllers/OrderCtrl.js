var Order = require('../models/OrderModel');
var Product = require('../models/ProductModel')
module.exports = {
	create:function(req,res){
		console.log('BODY', req.body)
		Order.create({products: req.body}, function(err,result){
			if(err){res.status(500).send(err)}
			// else{res.json(result);}
			var products = req.body
			var productsUpdated = 0;
			for (var i = 0; i < products.length; i++) {
				
				var qty = products[i].qty
				console.log(1111111, qty)
				Product.findById(products[i]._id, function(err, product) {
					console.log(232323, qty)
					product.qty -= qty;
					product.save()
					productsUpdated += 1
				})
				if (productsUpdated === products.length) {
					res.json(result);
				}
			}
		})
	},
	read:function(req,res){
		Order.find().exec(function(err,result){
			if(err){res.send(err)}
			else{res.json(result)}
		})
	},
	update:function(req,res){
		Order.findByIdAndUpdate(req.body.id, req.body.updatedProd, {new:true}, function(err,result){
			if(err){res.send(err);}
			else{res.json(result);}
		})
	},
	delete:function(req,res){
		Order.findByIdAndRemove(req.params.id, function(err,result){
			if(err){res.send(err)}
			else{res.json(result)}
		})
	}
}