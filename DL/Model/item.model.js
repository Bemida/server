const mongoose = require ('mongoose')

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    styling: [
        {interior:{
            color: {type: String, required: true},
            
          shelves: {amount: Number},
          drawers: {amount:Number},
            acessories: {
                handles: {
                    itemNumber: Number,
                    color: String,
                    style: String,
                    img: "🪵"
                }
            }

        }},
        {exterior: {
            material: {type: String, required: true},
            size: {height: Number, width: Number, depth: Number},
            color: {type: String, required: true}

        }}]
})


const itemModel = mongoose.model("item", itemSchema)

module.exports = itemModel