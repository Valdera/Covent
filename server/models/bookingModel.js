const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.ObjectId,
    ref: "Patient",
  },
  status: {
    type: String,
    required: [true, "Please enter the status"],
    enum: {
      values: ["CREATED", "ACCEPTED", "DONE", "CANCELLED"],
      message: "{VALUE} is not supported",
    },
  },
  service: {
    type: mongoose.Schema.ObjectId,
    ref: "Service",
    required: [true, "Review must belong to a user"],
  },
  scheduleId: {
    type: mongoose.Schema.ObjectId,
    ref: "Schedule",
  },
  acceptedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
  },
  createdAt: {
    type: Date,
    required: [true, "Please enter the date"],
  },
  updatedAt: {
    type: Date,
    required: [true, "Please enter the date"],
  },
  deletedAt: {
    type: Date,
    required: [true, "Please enter the date"],
  },
});

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: "service",
    select: "doctor",
  });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
