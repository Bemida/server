const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")

const hardwareSchema = new mogoose.Schema({
        height: {
            type:Number,
            require: true
        },
        doors:[
            { quantity: {
                type:Number
              },
              price: {
                type: Number
              }
        }],
        isActive: {
            type: Boolean,
            default: true
        }
})

const hardwareModel = mongoose.model("hardware", hardwareSchema)
module.exports = hardwareModel