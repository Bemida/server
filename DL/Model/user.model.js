const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
    },
    address: {
        type: String,
    },
    isActive: {
        type: Boolean,
    }
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
