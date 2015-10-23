var Mongoose=require('mongoose');
var schema=new Mongoose.Schema({
	order:[
		{
			name:{type:String},
			qty:{type:Number},
			price:{type:Number}
		}
	]
})
module.exports=Mongoose.model('fulfill', schema)