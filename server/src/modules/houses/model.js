import {model, Schema} from "mongoose";

const House = new Schema({
	name: {type: String, required: true},
	address: {type: String, required: true},
	pays: [{type: Schema.Types.ObjectID, ref: 'Pay'}]
})

export default model('houses', House)
