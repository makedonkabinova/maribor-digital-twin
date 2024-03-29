const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const orderSchema = new Schema({
	'pick_up_time' : Date,
	'order_time' : Date,
	'price' : Number,
	'meal_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'meal'
	},
	'user_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user',
		default: null
	},
	'completed' : {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('order', orderSchema);
