// Module import
const express = require("express");

// File import
const patientController = require("../controllers/patientController");

const router = express.Router();

// Routes (/v1/ping)
router.route("/").post(patientController.createPatient);

module.exports = router;
