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
    },
    styling: [{
        interior: {
            color: { type: String, required: true },
                shelves: {
                    amount: Number,
                    position: {
                        enum: ["right", "left", "center"]
                    },
                    hangingRod: {
                        amount: Number,
                        position: {
                            enum: ["right", "left", "center"]
                        }

                    },
                    drawers: { amount: Number },
                    acessories: {
                        drawerHandles: {
                            itemNumber: Number,
                            color: String,
                            style: String,
                            img: String
                        }
                    }

                }
            }
        },
        {
        exterior: {
            material: { type: String, required: true },
            doors: { amount: Number },
            size: { height: Number, width: Number, depth: Number },
            color: { type: String, required: true },
            handles: {
                itemNumber: Number,
                color: String,
                style: String,
                img: "🪵"
            },
            base: {
                default: "legs",
                enum: ["legs", "tzokel"]
            }

        }
    }]
})

const orderModel = mongoose.model("order", orderSchema)

module.exports = orderModel