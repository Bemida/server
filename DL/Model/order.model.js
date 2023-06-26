const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user: {
        type: String,
        required: false // for the moment
    },
    status: {
        type: String,
        default: "in_progress",
        enum: ["in_progress", "confirmed"]
    },
    date: {
        type: Date,
        default: Date.now
    },
    shipping: {
        type: String,
        default: "regular",
        enum: ["regular", "express"]
    },
    stages: [{
        stage: [{
            stageNo: {
                type: Number,
                default: 1,
                enum: [1, 2, 3, 4]
            },
            furniture: {
                type: String,
                enum: ["Closet", "Bed", "Bookcase", "Table", "Console", "Drawers"],
                default: "Closet"
            },
            items: [{
                item: {
                    name: String,
                    itemId: String,
                    amount: Number,
                    img: "String",
                    price: Number
                }
            }]
        }]
    }],
    total: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const orderModel = mongoose.model("order", orderSchema)

module.exports = orderModel