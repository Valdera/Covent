const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
  },
  schedule: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Schedule",
    },
  ],
  createdAt: {
    type: Date,
    required: [true, "Please enter the date"],
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
  },
  updatedAt: {
    type: Date,
    required: [true, "Please enter the date"],
  },
  deletedAt: {
    type: Date
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
