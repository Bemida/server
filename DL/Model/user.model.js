const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    phoneNumber: {
        type: Number,
    },
    address: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: new Date(),
    },
    lastConnectedDate: {
        type: Date,
        default: new Date(),
    },
    Permissions: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    isActive: {
        type: Boolean,
        default: true,
    }
    
=======
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: new Date(),
  },
  lastConnectedDate: {
    type: Date,
    default: new Date(),
  },
  Permissions: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
>>>>>>> 23e4d837c31ce6fe3d6f7a3269c57eb7f94fe6fc
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
