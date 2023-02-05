import {model, Schema} from "mongoose";

const Util = new Schema({
	name: {type: String, required: true},
	plans: [{
		dateStart: {type: String, required: true},
		planValue: [{
			value: {type: Number, required: true},
			fromStat: {type: Number, required: true}
		}]
	}],
})

export default model('Util', Util)
