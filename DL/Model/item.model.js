const mongoose = require ('mongoose')

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    styling: [
        {interior:{
           
        color: {type: String, required: true},
        
          shelves: {amount: Number,
            position: {
                enum: ["right", "left", "center"]
            },
          hangingRod: {amount: Number,
            position: {
                enum: ["right", "left", "center"]
            }
        
        },
          drawers: {amount:Number},
            acessories: {
                drawerHandles: {
                    itemNumber: Number,
                    color: String,
                    style: String,
                    img: "🪵"
                }
            }

        }}},
        {exterior: {
            material: {type: String, required: true},
            doors: {amount: Number},
            size: {height: Number, width: Number, depth: Number},
            color: {type: String, required: true},
            handles:  {
                itemNumber: Number,
                color: String,
                style: String,
                img: "🪵"
            },
            base: {
                default: "legs",
                enum:["legs", "tzokel"]
            }

        }}]
})

const itemModel = mongoose.model("item", itemSchema)

module.exports = itemModel