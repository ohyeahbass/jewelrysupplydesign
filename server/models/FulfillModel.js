var Mongoose=require('mongoose');
var schema=new Mongoose.Schema({
	order:[
		{
			name: {type: String},
			qty: {type: Number},
			price: {type: Number},
			font: {type:String},
			additionalstamp:{type:String},
			custom:{type:String}
		}
	]
})
module.exports=Mongoose.model('fulfill', schema)