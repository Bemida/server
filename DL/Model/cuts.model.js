const mongoose = require('mongoose')

const cutsSchema = new mongoose.Schema({
    saw: {
        bladeWidth: Number
    },
    stock: [
        {
            name: {
                type : String,
                default: "basic",
                enum : ["basic", "Luxury", "Premium"]
            },
            l: Number,
            w: Number,
            t: Number,
            material: {
                type :String,
                default : "Pine plywood",
                emum : ["Pine plywood", "Oak","Maple","MDF"]
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
                type : String,
                default : "Pine plywood",
                emum : ["Pine plywood", "Aak","Maple","MDF"]
            },
            q: Number
        }
    ]
})

const cutsModel = mongoose.model("cuts", cutsSchema)

module.exports = cutsModel