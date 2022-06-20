// Module import
const express = require("express");

// File import
const serviceController = require("../controllers/serviceController");

const router = express.Router();

// Routes (/v1/service)
router.route("/").post(serviceController.createService);
router.route("/:id").get(serviceController.getServiceByID);

module.exports = router;
