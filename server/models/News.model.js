const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
    heading: String,
    textNews: String,
    category: {
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    },
    image: String
})

const News = mongoose.model('News', newsSchema);

module.exports = News