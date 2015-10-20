var Mongoose = require('mongoose');
var schema = new Mongoose.Schema({
	types:{type:String, lowercase:true, required:true},
	name:{type:String, required:true},
	color:{type:String},
	longDesc:{type:String},
	font:{type:String},
	shortDesc:{type:String},
	qty:{type:Number, required:true},
	size:{type:Number},
	price:{type:Number},
	img1:{type:String},
	img2:{type:String},
	img3:{type:String},
	img4:{type:String},
	img5:{type:String},
	img6:{type:String},
	img7:{type:String},
	img8:{type:String},
	img9:{type:String},
	img10:{type:String}
})
module.exports = Mongoose.model('product', schema)