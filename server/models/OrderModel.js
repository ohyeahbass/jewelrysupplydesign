var Mongoose = require('mongoose');
var schema = new Mongoose.Schema({
	products: [
		 {
			name: {type: String},
			qty: {type: Number},
			price: {type: Number},
			font: {type:String},
			additionalstamp:{type:String},
			custom:{type:String}
			
		}
	],
	customer:{type: Mongoose.Schema.Types.ObjectId, ref:'User'}
	
})
module.exports = Mongoose.model('order', schema)