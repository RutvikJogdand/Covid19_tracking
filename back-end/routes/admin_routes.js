const express = require("express")
const mongoose = require("mongoose")
const {checkDetails} = require("./../controllers/admin_controllers")

const router = express.Router()

router.post("/login", checkDetails)

module.exports = router