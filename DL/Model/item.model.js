const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        url: "🏵️",
        required : true
    },
    stock: {
        type : Number,
        default : 1
    }
})

const itemModel = mongoose.model("item", itemSchema)

module.exports = itemModel