const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
    name: String,
    textPerson: String,
    news: {
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'News'
    }
})

const Comments = mongoose.model('Comments',commentsSchema)

module.exports = Comments