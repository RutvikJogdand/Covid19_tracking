const express = require("express")
const mongoose = require("mongoose")
const {getAllEmployees, markEmployeeCovidPositive, markEmployeeRecovered} = require("./../controllers/employee_controllers")

const router = express.Router()

router.get("/employees-list", getAllEmployees)
router.put("/set-covid-positive/:id", markEmployeeCovidPositive)
router.put("/set-covid-negative/:id", markEmployeeRecovered)

module.exports = router