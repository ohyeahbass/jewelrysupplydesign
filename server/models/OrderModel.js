var Mongoose = require('mongoose');
var schema = new Mongoose.Schema({
	products: [
		 {
			name: {type: String},
			qty: {type: Number},
			price: {type: Number}
		}
	],
	
})
module.exports = Mongoose.model('order', schema)