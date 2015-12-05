var Fulfill = require('../models/FulfillModel');
module.exports ={
	create:function(req,res){
		var newOrd={
			products:req.body,
			customer:req.user._id
		}
		Fulfill.create(newOrd,function(err,result){
			if(err){res.send(err)}
			else{res.json(result)}
		})
	},
	read:function(req,res){
		Fulfill.find().exec(function(err,result){
			if(err){res.send}
			else{res.json(result)}
		})
	}
}
