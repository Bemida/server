const mongoose = require('mongoose')

const cutsSchema = new mongoose.Schema({
    saw: {
        bladeWidth: Number
    },
    stock: [
        {
            name: {
                default: "basic",
                enum : ["basic", "Luxury", "Premium"]
            },
            l: Number,
            w: Number,
            t: Number,
            material: {
                default : "Pine plywood",
                emum : ["Pine plywood", "Aak","Maple","MDF"]
            },
            q: Number,
            cost: Number
        }
    ],
    parts: [
        {
            name: String,
            l: Number,
            w: Number,
            t: Number,
            material: {
                default : "Pine plywood",
                emum : ["Pine plywood", "Aak","Maple","MDF"]
            },
            q: Number
        }
    ]
})

const cutsModel = mongoose.model("cuts", cutsSchema)

module.exports = cutsModel