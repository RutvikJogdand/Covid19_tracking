const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require('cors')
// Data:
const adminData = require("./admin_data")
// Models:
const Admins = require("./models/admin_model")
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

    if(Admins.collection.countDocuments(function (err, count) {
        if (!err && count === 0) {
            // It's empty
            Admins.insertMany(adminData).then(()=>{ 
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
