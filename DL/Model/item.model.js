const mongoose = require ('mongoose')

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    barcode:{
        type: Number,
        required: true
    },
    size:{
        haight:{type: Number, required:true},
        wieth:{type: Number, required:true},
        depth:{type: Number, required:true},
        doors:{type: Number, required:true},
        matetials:{type: String, required:true},
    },
    style:{handle:{type: String, required:true},
            color:{type: Number, required:true},
            base:{type: String, required:true , enum:["zokel","legs"]},

    }
        

    
})

const itemModel = mongoose.model("item", itemSchema)

module.exports = itemModel