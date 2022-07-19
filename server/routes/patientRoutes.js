// Module import
const express = require("express");

// File import
const patientController = require("../controllers/patientController");

const router = express.Router();

// Routes
router.route("/").post(patientController.createPatient);

module.exports = router;
