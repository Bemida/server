const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        name : String,
        phone : Number,
        email : String,
        // required: false // for the moment
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
    furniture: {
        type: String,
        enum: ["Closet", "Bed", "Bookcase", "Table", "Console", "Drawers"],
        default: "Closet"
    },
    interiorStyle: {
        color: { type: String, required: true },
        shelves: {
            amount: Number,
            section: Number,
            positions: []
        },
        hangingRod: {
            amount: Number,
            section: Number,
            positions: []
        },
        drawers: {
            amount: Number,
            section: Number,
            positions: []
        },
        drawerHandles: {
            itemNumber: Number,
            color: String,
            style: String,
            img: String
        }
    },
    exteriorStyle: {
        material: { type: String, required: true },
        doors: { amount: Number },
        size: { height: Number, width: Number, depth: Number },
        color: { type: String, required: true },
        handles: {
            itemNumber: Number,
            color: String,
            style: String,
            img: String
        },
        base: {
            type: String,
            default: "legs",
            enum: ["legs", "tzokel"]
        }
    },
    total: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const orderModel = mongoose.model("order", orderSchema)

module.exports = orderModel