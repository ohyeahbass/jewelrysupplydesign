var Mongoose    = require('mongoose');
var d 		 	= new Date();

var schema = new Mongoose.Schema({
	products: [
		 {
			sku:	  {type: Number},
			_id:	  {type: String},
			title:    {type: String},
			img1:     {type: String},
			qty: 	  {type: Number},
			pQ:		  {type: Number},
			itemTotal:{type: Number}
		}
	],
	
	customer:{type: Mongoose.Schema.Types.ObjectId, ref:'User'},
	time : { type : Date, default: Date.now }	
})
module.exports = Mongoose.model('order', schema)