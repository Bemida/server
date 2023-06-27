const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userPhone: {
        type: Number,
        required: true
    },
    userEmail: {
        type: String,
        required: true
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
    section1: {
        shelves: {
            amount: Number,
            default: 0
        },
        hangingRod: {
            amount: Number,
            default: 0
        },
        drawers: {
            amount: Number,
            default: 0

        }
    },
    section2: {
        shelves: {
            amount: Number,
            default: 0
        },
        hangingRod: {
            amount: Number,
            default: 0
        },
        drawers: {
            amount: Number,
            default: 0
        }   
    },

    material: {
        type: String,
        enum: ["wood", "pine", "mdf"],
        default: "wood"
    },
    doors: {
        type: Number,
        default: 0
    },
    height: {
        type: Number,
        default: 0
    },
    width: {
        type: Number,
        default: 0
    },
    depth: {
        type: Number,
        default: 0
    },
    color: {
        type: String,
        enum: ["white", "oak", "brown", "black", "cream", "red"],
        default: "white"
    },
    handleId: {
        type: String
        //type: mongo object
    },
    stageNo: {
        type: Number,
        default: 1
    },
    base: {
        type: String,
        default: "legs",
        enum: ["legs", "tzokel"]
    }
    ,
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