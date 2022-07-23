const mongoose = require('mongoose')

const CollectionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	creator: {
		type: String,
		required: true,
	},
	products: [String],
})

module.exports = mongoose.model('collection', CollectionSchema)