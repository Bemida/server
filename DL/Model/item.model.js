const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    stock: {
        type : Number,
        default : 1
    },
    barcode: {
        type:Number,
        required:true,
        unique: true
    }
})

const itemModel = mongoose.model("item", itemSchema)

module.exports = itemModel