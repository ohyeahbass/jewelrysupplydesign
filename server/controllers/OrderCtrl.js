var Order = require('../models/OrderModel');
var Product = require('../models/ProductModel')
module.exports = {
	create:function(req,res){
		Order.create(req.body, function(err,result){
			if(err){res.status(500).send(err);}
			var products = req.body;
			var productsUpdated = 0;
			for (var i = 0; i < products.length; i++) {
				var qty = products[i].qty;
				Product.findById(products[i]._id, function(err, product) {
					if(err){res.status(500).send(err)}
					else{
						product.qty -= qty;
						product.save()
						productsUpdated += 1
						if (productsUpdated === products.length) {
							res.json(result);
						};
					};
				});			
			};
		});
	},
	read:function(req,res){
		Order.find().populate('customer').exec(function(err,result){
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
		console.log('delete')
		Order.findByIdAndRemove(req.params.id, function(err,result){
			if(err){res.send(err)}
			else{res.json(result)}
		})
	}
}