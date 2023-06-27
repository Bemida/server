const mongoose = require ('mongoose')

const templateSchema = new mongoose.Schema({
    sample:{
        type: String,
        required: true
    }
})

const templateModel = mongoose.model("template", templateSchema)

module.exports = templateModel