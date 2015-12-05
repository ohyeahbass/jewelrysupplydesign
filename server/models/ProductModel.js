var Mongoose = require('mongoose');
var schema = new Mongoose.Schema({
	sku:			{type:Number},
	category:		{type:String, lowercase:true, required:true},
	subCategory:	{type:String, lowercase:true},
	title:			{type:String, required:true},
	color:			{type:String},
	longDesc:		{type:String},
	font:			{type:String},
	additionalstamp:{type:String},
	shortDesc:		{type:String},
	wholesalePriceQty:{	
		pq1:{
			price:{type:Number},
			qty:  {type:Number},
		},
		pq2:{
			price:{type:Number},
			qty:  {type:Number},
		},
		pq3:{
			price:{type:Number},
			qty:  {type:Number},
		},
		pq4:{
			price:{type:Number},
			qty:  {type:Number},
		},
		pq5:{
			price:{type:Number},
			qty:  {type:Number},
		},
		
	},
	priceQty:{
		pq1:{
			price:{type:Number},
			qty:  {type:Number},
		},
		pq2:{
			price:{type:Number},
			qty:  {type:Number},
		},
		pq3:{
			price:{type:Number},
			qty:  {type:Number},
		},
		pq4:{
			price:{type:Number},
			qty:  {type:Number},
		},
		pq5:{
			price:{type:Number},
			qty:  {type:Number},
		},
	},
	bullets:{
		bullet1:{type:String},
		bullet2:{type:String},
		bullet3:{type:String},
		bullet4:{type:String},
		bullet5:{type:String},
		bullet6:{type:String},
		bullet7:{type:String},
	},
	size: {type:Number},
	img1: {type:String},
	img2: {type:String},
	img3: {type:String},
	img4: {type:String},
	img5: {type:String},
	img6: {type:String},
	img7: {type:String},
	img8: {type:String},
	img9: {type:String},
	img10:{type:String},
	timeStampped: {type:Date, default: Date.now }
	
})
module.exports = Mongoose.model('product', schema)