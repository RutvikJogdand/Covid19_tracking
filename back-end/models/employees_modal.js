const mongoose = require("mongoose")

const Schema = mongoose.Schema

const employeesSchema = new Schema(

    {
        ID:{
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        Name:{
            type: String,
            required: true,
            trim: true
        },

        Location:{
            type: String,
            required: true,
            trim: true
        },

        Designation:{
            type: String,
            required: true,
            trim: true
        },

        Department:{
            type: String,
            required: true,
            trim: true
        },

        subDepartment:{
            type: String,
            required: true,
            trim: true
        },

        covid_positive:{
            type: Boolean,
            required: true,
            default: false
        },

        infection_date:{
            type: Date,
            default: ""
        },

        in_contact:{
            type: mongoose.Mixed,
            required: true,
            default: []
        },

        status:{
            type: String,
            required: true,
            trim: true,
            default: "Healthy"
        },

        man_days:{
            type: Number,
            default: 0
        }
    },

    {
        versionKey: false,
    }
)

module.exports = mongoose.model("employeeTrack", employeesSchema)