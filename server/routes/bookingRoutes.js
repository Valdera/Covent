// Module import
const express = require("express");

// File import
const bookingController = require("../controllers/bookingController");

const router = express.Router();

// Routes (/v1/service)
router.route("/").post(bookingController.createBooking);
router.route("/").get(bookingController.getAllBooking);
router.route("/:id").get(bookingController.getBookingByID);
router.route("/:id").patch(bookingController.updateAdminById);
router.route("/:id").delete(bookingController.deleteBookingById);

module.exports = router;
