const mongoose = require("mongoose")

const Schema = mongoose.Schema

const adminSchema = new Schema(

    {
        name:{
            type: String,
            required: true,
            trim: true
        },

        username:{
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        password:{
            type: String,
            required: true,
            trim: true,
            unique: true
        }
    },

    {
        versionKey: false,
    }
)

module.exports = mongoose.model("admin", adminSchema)