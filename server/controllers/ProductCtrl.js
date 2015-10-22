var Products = require('../models/ProductModel');
module.exports = {
	create:function(req,res){
		Products.create(req.body, function(err,result){
			if(err){res.send(err)}
			else{res.json(result);}
		})
	},
	read:function(req,res){
		Products.find().exec(function(err,result){
			if(err){res.send(err)}
			else{res.json(result)}
		})
	},
	find:function(req, res){
		Products.findById(req.params.id, function(err, result){
			if(err){res.send(err)}
			else{res.json(result)}
		})
	},
	update:function(req,res){
		Products.findByIdAndUpdate(req.body.id, req.body.updatedProd, {new:true}, function(err,result){
			if(err){res.send(err);}
			else{res.json(result);}
		})
	},
	delete:function(req,res){
		Products.findByIdAndRemove(req.params.id, function(err,result){
			if(err){res.send(err)}
			else{res.json(result)}
		})
	}
}