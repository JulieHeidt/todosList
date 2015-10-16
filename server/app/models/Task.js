var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TaskSchema = new Schema {
	content: String,
	date: Date,
	due: Date
}

module.exports = mongoose.model('Task', TaskSchema)