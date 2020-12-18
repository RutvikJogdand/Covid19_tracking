const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require('cors')
// Data:
const adminData = require("./admin_data")
const employeesData = require("./employees_data")
// Models:
const Admins = require("./models/admin_model")
const EmployeesTrack = require("./models/employees_modal")
// Routes:
const adminLoginRoute = require("./routes/admin_routes")

dotenv.config()

const app = express()

app.use( cors() )
app.use( express.json() )

// Admin routes:
app.use("/api/admin-login/",adminLoginRoute)

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, db) => {
    if (err) throw err;

    if(EmployeesTrack.collection.countDocuments(function (err, count) {
        if (!err && count === 0) {
            // It's empty
            EmployeesTrack.insertMany(employeesData).then(()=>{ 
            console.log("Data inserted")  // Success 
        }).catch((error)=>{ 
            console.log(error)      // Failure 
        }); 
        }
    }));
    
})


app.listen(5000, () => {
    console.log('Server is running up at port 5000')
})
